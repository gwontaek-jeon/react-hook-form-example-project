export function required(value: string | number) {
  const message = 'This field cannot be empty'
  if (typeof value === 'string') {
    return value.trim() !== '' || message
  } else {
    return !isNaN(value) || message
  }
}

export function isDomain(value: string) {
  return (
    /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g.test(value) ||
    'Must be a valid domain'
  )
}

export function isPath(value: string) {
  return /^[/\w\-]*(\/?([/\w\-]*)*)?$/.test(value) || 'Must be a valid path'
}
