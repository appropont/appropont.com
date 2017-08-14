import React from 'react'

import withAnalytics from './analytics'
import withHeader from './header'

export default (Wrapped) => {
  return withAnalytics(withHeader(Wrapped))
}