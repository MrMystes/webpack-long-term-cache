import { sample } from '../common'

export function logger(msgs) {
  console.log('module1')
  console.log('module2')
  const msg = sample(msgs)
  console.info(msg)
}
