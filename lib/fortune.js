const fortunes = [
  '克服恐惧而不要被恐惧克服',
  '河流需要春天',
  '不要恐惧未知的东西',
  '你会有一个快乐的礼物',
  '尽可能保持简单'
]

exports.getFortune = () => {
  const idx = Math.floor(Math.random()*fortunes.length)
  return fortunes[idx]
}