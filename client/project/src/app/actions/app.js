export function select(n) {
  console.log('select', n)
  return {
    type: 'select',
    index: n
  }
}
