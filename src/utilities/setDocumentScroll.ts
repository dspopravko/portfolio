export const setDocumentScroll = (open: boolean) => {
  document.body.style.overflow = open ? 'initial' : 'hidden'
}
