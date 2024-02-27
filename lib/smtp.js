const nodemailer = require('nodemailer')

const mailTransport = nodemailer.createTransport({
  host: "smtp.163.com",  // 你的邮件服务器地址  
  port: 465,  // 你的邮件服务器端口  
  secure: true,  // true for 465, false for other ports  
  auth: {
    user: 'custji@163.com',
    pass: 'DDPLOBTIQKAHJFSW',
  }
})

exports.sendEmail = async () => {
  try {
    const result = await mailTransport.sendMail({
      from: 'custji@163.com',
      to: 'zzyn1020@163.com',
      subject: '宝宝',
      text: '永远爱宝宝'
    })
    console.log('宝宝邮箱发送爱心成功！', result)
  } catch(err) {
    console.log('邮件发送失败', err)
  }
}