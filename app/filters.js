/**
 * @param {Environment} env
 */

const { DateTime } = require('luxon')

module.exports = function (env) {
  const filters = {}

  filters.niceDate = (dateString) => {
    if (!dateString) return ''

    const dt = DateTime.fromISO(dateString)
    if (!dt.isValid) return dateString

    // If time is midnight (00:00), assume no time element was provided
    if (dt.hour === 0 && dt.minute === 0) {
      return dt.toFormat('dd/LL/yyyy')
    }

    return dt.toFormat("dd/LL/yyyy 'at' HH:mm")
  }

  filters.formatRecord = (value, type) => {
    switch (type) {
      case 'currency': {
        const num = parseFloat(value)
        if (isNaN(num)) return value
        return num.toLocaleString('en-GB', {
          style: 'currency',
          currency: 'GBP',
          minimumFractionDigits: 2
        })
      }
      case 'percent': {
        return value + '%'
      }
      case 'date':
        return filters.niceDate(value)
      case 'daysAndYears': {
        const parts = value.split('-')
        if (parts.length !== 2) return value
        const days = parseInt(parts[0], 10)
        const years = parseInt(parts[1], 10)
        if (isNaN(days) || isNaN(years)) return value
        const dayPart = days === 1 ? 'day' : 'days'
        const yearPart = years === 1 ? 'year' : 'years'
        if (days > 0 && years > 0) {
          return `${years} ${yearPart} and ${days} ${dayPart}`
        } else if (days > 0) {
          return `${days} ${dayPart}`
        } else if (years > 0) {
          return `${years} ${yearPart}`
        } else {
          return '0'
        }
      }
      default:
        return value
    }
  }

  filters.inputDatePart = (dateString, part) => {
    if (!dateString) return ''

    const dt = DateTime.fromISO(dateString)
    if (!dt.isValid) return ''

    switch (part) {
      case 'day':
        return dt.toFormat('dd')
      case 'month':
        return dt.toFormat('LL')
      case 'year':
        return dt.toFormat('yyyy')
      default:
        return ''
    }

  }

  filters.splitString = (string, position = 0, delimiter = '-') => {
    const parts = string.split(delimiter)
    return parts[position] || ''
  }

  filters.plural = (string, count, singular = '', plural = 's') => {
    return (count === 1) ? string + singular : string + plural
  }



  /* keep the following line to return your filters to the app  */
  return filters
}

/**
 * @import { Environment } from 'nunjucks'
 */
