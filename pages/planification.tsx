import { useState } from 'react'
import { NextPage } from 'next'
import { AppLayout } from 'components/AppLayout'

import { Calendar } from 'components/Calendar'
import { parseDate } from '@internationalized/date'

const Planification: NextPage = () => {
  const [value, setValue] = useState(parseDate('2022-12-05'))

  return (
    <AppLayout>
      <Calendar aria-label="Calendar" value={value} onChange={setValue} />
    </AppLayout>
  )
}

export default Planification
