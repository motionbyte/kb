import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

export async function exportElementToPng(el: HTMLElement, fileBase: string): Promise<void> {
  const canvas = await html2canvas(el, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#fdfbf7',
    logging: false,
  })
  const link = document.createElement('a')
  link.download = `${fileBase}.png`
  link.href = canvas.toDataURL('image/png')
  link.click()
}

/** One-page A4 PDF — entire poster scaled to fit. Use PNG for full pixel resolution. */
export async function exportElementToPdf(el: HTMLElement, fileBase: string): Promise<void> {
  const canvas = await html2canvas(el, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#fdfbf7',
    logging: false,
  })
  const imgData = canvas.toDataURL('image/png', 1)
  const pdf = new jsPDF({ orientation: 'p', unit: 'pt', format: 'a4' })
  const pageWidth = pdf.internal.pageSize.getWidth()
  const pageHeight = pdf.internal.pageSize.getHeight()
  const margin = 28
  const usableW = pageWidth - margin * 2
  const usableH = pageHeight - margin * 2

  const scale = Math.min(usableW / canvas.width, usableH / canvas.height)
  const w = canvas.width * scale
  const h = canvas.height * scale
  const x = (pageWidth - w) / 2
  const y = (pageHeight - h) / 2

  pdf.addImage(imgData, 'PNG', x, y, w, h)
  pdf.save(`${fileBase}.pdf`)
}
