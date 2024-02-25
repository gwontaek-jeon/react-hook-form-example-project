export function required(value: string) {
  return value.trim() !== '' || 'This field cannot be empty'
}
export function isDomain(value: string) {
  return (
    /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g.test(value) ||
    'Must be a valid domain'
  )
}

export function isPath(value: string) {
  return /^(\/[^\/]+){0,2}\/?$/gm.test(value) || 'Must be a valid path'
}
