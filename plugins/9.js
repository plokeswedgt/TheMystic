//حقوق الطبع والنشر ©JOANIMI/KILLUA
//https://whatsapp.com/channel/0029Vab5oDNElagpHtJjmT0B

استيراد pkg من '@whiskeysockets/baileys'؛
ثابت { generateWAMessageFromContent, proto } = pkg

var handler = async (m، { conn، usedPrefix }) => {

دع الرسالة = generateWAMessageFromContent(m.chat، {
  عرض الرسالة مرة واحدة: {
    رسالة: {
        "معلومات سياق الرسالة": {
          "بيانات تعريف قائمة الأجهزة": {},
          "deviceListMetadataVersion": 2
        },
        رسالة تفاعلية: proto.Message.InteractiveMessage.create({
          الجسم: proto.Message.InteractiveMessage.Body.create({
            النص: "اختبار"
          }),
          التذييل: proto.Message.InteractiveMessage.Footer.create({
            النص: "اختبار"
          }),
          العنوان: proto.Message.InteractiveMessage.Header.create({
            العنوان: "اختبار"،
            العنوان الفرعي: "اختبار"،
            hasMediaAttachment: كاذب
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            أزرار: [
  							{
  								الاسم: 'single_select'،
  						  	buttonParamsJson: JSON.stringify({
  						  		العنوان: 'انقر فوقي'
  						  		الأقسام: [
  						  			{
  						  				العنوان: 'قائمة'،
  							  	    highlight_label: 'تشغيل',
  						  		    الصفوف: [
  						  		    	{
  						  		    		العنوان: 'اختبار'،
  										      العنوان: 'انقر فوقي'
  									    	  الوصف: 'انقر هنا'
  								    		  المعرف: 'اختبار'
  						  		    	}
  						  		    ]
  						  			},
  						  			{
  						  				highlight_label: 'تشغيل',
  						  				الصفوف: [
  						  					{
  						  		    		العنوان: 'اختبار'،
  										      العنوان: 'انقر فوقي'
  									    	  الوصف: 'انقر هنا'
  								    		  المعرف: 'tes'
  						  		    	}
  						  				]
  						  			},
  						  			{
  						  				highlight_label: 'تشغيل',
  						  				الصفوف: [
  						  					{
  						  		    		العنوان: 'اختبار'،
  										      العنوان: 'انقر فوقي'
  									    	  الوصف: 'انقر هنا'
  								    		  معرف: 'te'
  						  		    	}
  						  				]
  						  			}
  						  		]
  						  	})
  							},
                              {
                                  الاسم: 'الرد السريع'،
                                  buttonParamsJson: JSON.stringify({
                                      عرض النص: 'الرد السريع'،
                                      المعرف: `الرسالة`
                                  })
                              },
                              {
                                  الاسم: 'cta_url'،
                                  buttonParamsJson: JSON.stringify({
                                      عرض النص: 'url'،
                                      عنوان URL: 'https://www.google.com'،
                                      التاجر_url: ''
                                  })
                              },
                              {
                                  الاسم: 'cta_call'،
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'اتصال',
                                      المعرف: 'الرسالة'
                                  })
                              },
                              {
                                  الاسم: 'cta_copy'،
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'نسخ',
                                      المعرف: '123456789'
                                      copy_code: 'الرسالة'
                                  })
                              },
                              {
                                  الاسم: 'cta_reminder'،
                                  buttonParamsJson: JSON.stringify({
                                      عرض النص: 'cta_reminder'،
                                      المعرف: 'الرسالة'
                                  })
                              },
                              {
                                  الاسم: 'cta_cancel_reminder'،
                                  buttonParamsJson: JSON.stringify({
                                      عرض النص: 'cta_cancel_reminder'،
                                      المعرف: 'الرسالة'
                                  })
                              },
                              {
                                  الاسم: 'address_message'،
                                  buttonParamsJson: JSON.stringify({
                                      عرض النص: 'عنوان الرسالة'،
                                      المعرف: 'الرسالة'
                                  })
                              },
                              {
                                  الاسم: 'send_location'،
                                  buttonParamsJson: JSON.stringify({
                                  })
                              }
           ],
          })
        })
    }
  }
}, {})

انتظر conn.relayMessage(msg.key.remoteJid، msg.message، { معرف الرسالة: msg.key.id })

}
handler.command = /^(mboton)$/i

معالج التصدير الافتراضي
