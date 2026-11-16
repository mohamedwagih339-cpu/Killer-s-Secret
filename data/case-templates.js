const CASE_TEMPLATE_PARTS = {
  locations: [
    {
      family: "observatory_last_signal",
      variant: "night_shift",
      sceneId: "observatory",
      location: {
        name: { ar: "مرصد السرو", en: "Al-Sarw Observatory" },
        description: {
          ar: "مرصد جبلي حديث يضم قبة تلسكوب وغرفة تحكم ومختبراً صغيراً لتحليل الضوء. انقطعت الكهرباء دقائق في الليلة التي ماتت فيها الباحثة.",
          en: "A modern mountain observatory with a telescope dome, control room, and a small light-analysis lab. The power failed for several minutes on the night the researcher died."
        }
      }
    }
  ],
  crimes: [
    {
      family: "observatory_last_signal",
      variant: "night_shift",
      title: { ar: "آخر إشارة من المرصد", en: "The Observatory's Last Signal" },
      intro: {
        ar: "عُثر على جثة الباحثة الدكتورة ليان حداد قرب منصة الرصد بعد ليلة عمل طويلة. كان آخر ملف أشعة قد سجّل إشارة غير مألوفة، ثم انقطعت الكهرباء عن القبة دقائق. لا يوجد اقتحام، وكل من بقي في المرصد يعرف أن مفتاح المعايرة لا يُترك قرب التلسكوب.",
        en: "Researcher Dr. Layan Haddad was found dead beside the observation platform after a long night shift. The final spectral file recorded an unusual signal, then the dome lost power for several minutes. There was no break-in, and everyone left in the observatory knew the calibration wrench was never kept by the telescope."
      },
      victim: {
        name: { ar: "الدكتورة ليان حداد", en: "Dr. Layan Haddad" },
        description: {
          ar: "باحثة فلكية في الثانية والأربعين، دقيقة في عملها وكانت على وشك نشر نتيجة رصد مهمة.",
          en: "A 42-year-old astronomer, meticulous in her work and close to publishing an important observation."
        },
        placeOfDeath: { ar: "منصة الرصد أسفل قبة التلسكوب", en: "Observation platform beneath the telescope dome" },
        timeOfDeath: { ar: "بين العاشرة وعشرين دقيقة والعاشرة وخمس وخمسين دقيقة مساءً", en: "Between 10:20 and 10:55 PM" }
      },
      autopsy: {
        cause: {
          ar: "ضربة واحدة قوية بجسم معدني على مؤخرة الرأس سببت كسراً قاتلاً. لا توجد آثار سلاح في يد الضحية ولا علامات مقاومة طويلة.",
          en: "A single forceful blow from a metal object to the back of the head caused a fatal fracture. There was no weapon in the victim's hand and no sign of a prolonged struggle."
        },
        deathWindow: { start: "22:20", end: "22:55" },
        findings: [
          {
            ar: "اتجاه الضربة يشير إلى أن الضحية كانت منحنيّة أمام وحدة الرصد حين اقترب منها شخص تعرفه.",
            en: "The angle of the blow suggests the victim was bent over the observation console when someone she knew approached."
          },
          {
            ar: "لا توجد آثار دخان أو حريق؛ انقطاع الكهرباء المسجل في المرصد لا يحدد وحده لحظة الوفاة.",
            en: "There are no signs of smoke or fire; the recorded observatory outage alone does not establish the time of death."
          },
          {
            ar: "بقايا مسحوق خزفي دقيق على كمّ الضحية، لا يشبه غبار القبة الحجري.",
            en: "Fine ceramic powder on the victim's sleeve does not resemble the dome's mineral dust."
          }
        ]
      },
      endings: {
        full: {
          title: { ar: "الملف الذي لم يستطع تزويره", en: "The File He Could Not Alter" },
          text: {
            ar: "واجهت {killer} بسجل المعايرة وبطاقة الدخول وملف الرصد. انهار مهندس الأجهزة واعترف بأنه غيّر محاذاة الطيف ليبدو اكتشاف ليان كأنه اكتشافه، ثم قتلها حين هددت بإرسال النسخة الأصلية إلى لجنة النشر. الدليل لم يترك مجالاً لتفسير آخر، وأُغلقت القضية.",
            en: "You confronted {killer} with the calibration record, access card, and observation file. The instrument engineer broke down and confessed that he had altered the spectral alignment to pass Layan's discovery off as his own, then killed her when she threatened to send the original to the publication board. The evidence left no room for another explanation, and the case was closed."
          }
        },
        partial: {
          title: { ar: "إجابة ناقصة", en: "An Incomplete Answer" },
          text: {
            ar: "أشرت إلى القاتل، لكن ربطك بين الأدلة والدافع لم يكن محكماً بما يكفي. بقيت الشكوك حول ملف الرصد، وأمرت المحكمة بمراجعة فنية أخرى قبل إصدار حكم نهائي.",
            en: "You named the killer, but your links between the evidence and motive were not strong enough. Doubts remained around the observation file, and the court ordered another technical review before reaching a verdict."
          }
        },
        innocent: {
          title: { ar: "إشارة في الاتجاه الخطأ", en: "A Signal in the Wrong Direction" },
          text: {
            ar: "اتهمت {suspect} خطأً. كشف التحقيق سرّه: {secret}، لكنه لم يقتل ليان. استغل {killer} ارتباك القضية واختفى قبل أن تُستعاد النسخة الأصلية من ملف الرصد.",
            en: "You accused {suspect} by mistake. The investigation revealed the secret: {secret}, but he did not kill Layan. {killer} used the confusion to disappear before the original observation file could be recovered."
          }
        }
      }
    }
  ],
  characters: [
    {
      family: "observatory_last_signal",
      variant: "night_shift",
      killerId: "obs_suspect_engineer",
      motiveOptions: {
        correctId: "obs_motive_fraud",
        options: [
          {
            id: "obs_motive_grant",
            text: { ar: "إخفاء عجز المرصد عن تجديد منحة التشغيل", en: "Concealing the observatory's failure to renew its operating grant" }
          },
          {
            id: "obs_motive_fraud",
            text: { ar: "منع ليان من كشف تزويره لنتيجة الرصد ونسبتها إليه", en: "Stopping Layan from exposing his falsified observation and stolen credit" }
          },
          {
            id: "obs_motive_archive",
            text: { ar: "بيع أطلس فلكي نادر سراً إلى جامع مقتنيات", en: "Selling a rare star atlas to a private collector" }
          }
        ]
      },
      suspects: [
        {
          id: "obs_suspect_director",
          name: { ar: "د. مريم قاسم", en: "Dr. Mariam Qasim" },
          age: 51,
          job: { ar: "مديرة المرصد", en: "Observatory Director" },
          relation: { ar: "كانت مشرفة ليان وتدير ميزانية الفريق", en: "Layan's supervisor who managed the team's budget" },
          personality: "proud",
          personalityDesc: { ar: "رسمية وفخورة بمكانة المرصد، ولا تتقبل التشكيك في إدارتها.", en: "Formal and proud of the observatory's reputation, and intolerant of questions about her management." },
          secret: { ar: "أخّرت إبلاغ مجلس الإدارة بخبر رفض المنحة لتجنب إغلاق المرصد.", en: "She delayed telling the board that the grant had been rejected to prevent the observatory from closing." },
          questions: [
            {
              id: "obs_q_director_timeline",
              category: "alibi",
              text: { ar: "أين كنتِ خلال فترة انقطاع الكهرباء؟", en: "Where were you during the power outage?" },
              responses: {
                calm: { ar: "كنت في مكتبي أراجع جدول المناوبة، ولم أغادره.", en: "I was in my office reviewing the shift roster and did not leave it." },
                pressing: { ar: "هذا سؤال لا يبرر التشكيك في عملي؛ كنت في المكتب.", en: "That question does not justify questioning my work; I was in my office." },
                sympathetic: { ar: "كنت أراجع الجدول وحدي. كانت ليلة متوترة للفريق كله.", en: "I was reviewing the roster alone. It was a tense night for the whole team." }
              }
            },
            {
              id: "obs_q_director_budget",
              category: "motive",
              text: { ar: "هل واجهتك ليان بشأن تمويل المرصد؟", en: "Did Layan confront you about the observatory's funding?" },
              responses: {
                calm: { ar: "سألت عن الميزانية، كما يفعل أي باحث مسؤول.", en: "She asked about the budget, as any responsible researcher would." },
                pressing: { ar: "لم يكن لها أن تتدخل في قرارات المجلس.", en: "It was not her place to interfere with the board's decisions." },
                sympathetic: { ar: "كانت قلقة على فريقها، وأنا أتفهم ذلك.", en: "She was worried about her team, and I understand that." }
              }
            },
            {
              id: "obs_q_director_secret",
              category: "secret",
              text: { ar: "هل أخفيتِ عن المجلس رسالة رفض المنحة؟", en: "Did you hide the grant rejection from the board?" },
              responses: {
                calm: { ar: "لا أريد مناقشة مراسلات المجلس قبل مراجعتها.", en: "I do not want to discuss board correspondence before it is reviewed." },
                pressing: { ar: "لا تخلط بين تأخير إداري وجريمة قتل.", en: "Do not confuse an administrative delay with murder." },
                sympathetic: { ar: "كان القرار صعباً، وأخشى أن أكون قد خذلت فريقي.", en: "It was a difficult decision, and I fear I may have let my team down." }
              },
              secretReveal: {
                approach: "sympathetic",
                text: { ar: "تعترف مريم بأنها أخّرت الرسالة أسبوعاً، لكنها تقول إنها لم تقترب من قبة الرصد.", en: "Mariam admits she delayed the letter for a week, but says she never went near the telescope dome." }
              }
            }
          ]
        },
        {
          id: "obs_suspect_caretaker",
          name: { ar: "سالم راضي", en: "Salem Radi" },
          age: 44,
          job: { ar: "مسؤول الصيانة الليلية", en: "Night Maintenance Custodian" },
          relation: { ar: "يتولى تنظيف الغرف وإغلاق الممرات", en: "Responsible for cleaning rooms and locking corridors" },
          personality: "nervous",
          personalityDesc: { ar: "متوتر وسريع الكلام، ويخشى فقدان عمله.", en: "Nervous and quick to speak, with a fear of losing his job." },
          secret: { ar: "أخرج أطلساً قديماً من المخزن ليبيعه ويسدد ديناً.", en: "He removed an old atlas from storage to sell it and pay a debt." },
          questions: [
            {
              id: "obs_q_caretaker_timeline",
              category: "alibi",
              text: { ar: "ما الغرف التي نظفتها في نوبة الليل؟", en: "Which rooms did you clean during the night shift?" },
              responses: {
                calm: { ar: "الممر الشرقي وغرفة الأرشيف، ثم عدت إلى مخزن الأدوات.", en: "The east corridor and archive, then I returned to the supply closet." },
                pressing: { ar: "قلت لك الممر والأرشيف! لم أدخل القبة.", en: "I said the corridor and archive! I never entered the dome." },
                sympathetic: { ar: "كنت وحدي تقريباً طوال النوبة، أنظف الممرات بهدوء.", en: "I was almost alone the whole shift, quietly cleaning the corridors." }
              }
            },
            {
              id: "obs_q_caretaker_access",
              category: "evidence",
              text: { ar: "هل لمست أدوات المعايرة قرب منصة التلسكوب؟", en: "Did you touch the calibration tools near the telescope platform?" },
              responses: {
                calm: { ar: "لا، لا أستخدم تلك الأدوات؛ عليها علامات المهندسين.", en: "No, I do not use those tools; they are marked for the engineers." },
                pressing: { ar: "فتشت أدوات التنظيف فقط، لا أدوات التلسكوب.", en: "I checked only the cleaning supplies, not the telescope tools." },
                sympathetic: { ar: "أخاف أصلاً من كسر شيء باهظ الثمن هناك.", en: "I am afraid of breaking anything expensive in there." }
              }
            },
            {
              id: "obs_q_caretaker_secret",
              category: "secret",
              text: { ar: "لماذا تخفي ما أخذته من مخزن الأرشيف؟", en: "Why are you hiding what you took from the archive store?" },
              responses: {
                calm: { ar: "كانت نوبة تنظيف عادية، ولم أدخل القبة.", en: "It was an ordinary cleaning shift, and I did not enter the dome." },
                pressing: { ar: "لا تخلط بين عملي في الممر وما حدث للدكتورة ليان.", en: "Do not confuse my corridor work with what happened to Dr. Layan." },
                sympathetic: { ar: "أريد فقط أن أحتفظ بعملي؛ لم أؤذِ أحداً.", en: "I only want to keep my job; I did not hurt anyone." }
              },
              secretReveal: {
                approach: "pressing",
                text: { ar: "يعترف سالم بسرقة الأطلس ليسدد دينه، ويصرّ أن دخوله كان إلى الأرشيف لا القبة.", en: "Salem admits stealing the atlas to pay a debt, insisting he entered the archive, not the dome." }
              }
            }
          ]
        },
        {
          id: "obs_suspect_assistant",
          name: { ar: "نورا فؤاد", en: "Noura Fouad" },
          age: 29,
          job: { ar: "مساعدة باحثة", en: "Research Assistant" },
          relation: { ar: "عملت مع ليان على تحليل الإشارة", en: "Worked with Layan analyzing the signal" },
          personality: "evasive",
          personalityDesc: { ar: "ذكية ومراوغة، تختار كلماتها بحذر.", en: "Clever and evasive, choosing her words carefully." },
          secret: { ar: "حذفت تسجيلاً شخصياً لليان لأنها احتوى على نقاش خاص بينهما.", en: "She deleted a personal recording because it contained a private conversation with Layan." },
          questions: [
            {
              id: "obs_q_assistant_timeline",
              category: "alibi",
              text: { ar: "هل بقيتِ في غرفة التحليل بعد انتهاء الرصد؟", en: "Did you stay in the analysis room after observation ended?" },
              responses: {
                calm: { ar: "نعم، كنت أراجع القياسات على الحاسوب.", en: "Yes, I was reviewing the measurements on the computer." },
                pressing: { ar: "لم أغادر الغرفة، والسجل يثبت وقت دخولي.", en: "I did not leave the room, and the access log shows when I entered." },
                sympathetic: { ar: "بقيت أعمل لأن ليان طلبت مني مراجعة جدول البيانات.", en: "I stayed to work because Layan asked me to review the spreadsheet." }
              }
            },
            {
              id: "obs_q_assistant_signal",
              category: "witness",
              text: { ar: "هل لاحظتِ تغييراً في ملف الإشارة الأخير؟", en: "Did you notice any change in the final signal file?" },
              responses: {
                calm: { ar: "كان هناك فرق في المحاذاة، لكنني ظننته خطأ معايرة.", en: "There was an alignment difference, but I thought it was a calibration error." },
                pressing: { ar: "المهندس وحده يملك صلاحية تعديل المحاذاة.", en: "Only the engineer has permission to alter the alignment." },
                sympathetic: { ar: "ليان بدت قلقة عندما رأت النسخة الأخيرة.", en: "Layan looked worried when she saw the final version." }
              }
            },
            {
              id: "obs_q_assistant_secret",
              category: "secret",
              text: { ar: "ماذا حدث للتسجيل الصوتي الذي حذفته؟", en: "What happened to the audio recording you deleted?" },
              responses: {
                calm: { ar: "كان هناك ملف لم أعد أحتاجه على الجهاز.", en: "There was a file on the device that I no longer needed." },
                pressing: { ar: "لا علاقة لملف صوتي قديم بما حدث لليان.", en: "An old audio file has nothing to do with what happened to Layan." },
                sympathetic: { ar: "كان بيننا حديث خاص لا أريد نشره، ولم يكن متعلقاً بعمل الرصد.", en: "We had a private conversation I do not want made public; it was unrelated to the observation work." }
              },
              secretReveal: {
                approach: "sympathetic",
                text: { ar: "تعترف نورا بحذف تسجيل لنقاش شخصي، وتوضح أن حذفه كان لحماية خصوصيتها لا لإخفاء جريمة.", en: "Noura admits deleting a recording of a personal argument, explaining she wanted privacy, not to hide a crime." }
              }
            }
          ]
        },
        {
          id: "obs_suspect_engineer",
          name: { ar: "فادي ناصر", en: "Fadi Nasser" },
          age: 36,
          job: { ar: "مهندس أجهزة الرصد", en: "Observation Systems Engineer" },
          relation: { ar: "صان تلسكوب المرصد وتولى سجل المعايرة", en: "Maintained the observatory telescope and calibration log" },
          personality: "stubborn",
          personalityDesc: { ar: "عنيد وواثق بمهارته التقنية، ويضيق بالأسئلة المباشرة.", en: "Stubborn and confident in his technical skill, impatient with direct questions." },
          secret: { ar: "غيّر محاذاة ملف الإشارة لينسب اكتشاف ليان إلى نفسه.", en: "He altered the signal file's alignment to claim Layan's discovery as his own." },
          questions: [
            {
              id: "obs_q_engineer_timeline",
              category: "alibi",
              text: { ar: "أين كنت خلال انقطاع الكهرباء؟", en: "Where were you during the power outage?" },
              responses: {
                calm: { ar: "في ورشة الأجهزة أفحص وحدة الطاقة الاحتياطية.", en: "In the instrument workshop checking the backup power unit." },
                pressing: { ar: "سجل الصيانة يثبت أنني كنت في الورشة، لا في القبة.", en: "The maintenance log proves I was in the workshop, not the dome." },
                sympathetic: { ar: "كنت أحاول إعادة الطاقة بأسرع ما يمكن؛ الأجهزة حساسة.", en: "I was trying to restore power as quickly as possible; the instruments are delicate." }
              }
            },
            {
              id: "obs_q_engineer_tools",
              category: "evidence",
              text: { ar: "من استخدم مفتاح المعايرة قبل آخر رصد؟", en: "Who used the calibration wrench before the final observation?" },
              responses: {
                calm: { ar: "أنا أستخدمه ضمن عملي، لكنني أعدته إلى خزانة الورشة.", en: "I use it for my work, but I returned it to the workshop cabinet." },
                pressing: { ar: "لا أحد يدخل ورشتي دون إذن؛ الأدوات كانت في مكانها.", en: "No one enters my workshop without permission; the tools were in place." },
                sympathetic: { ar: "ليان طلبت مني فحص المحاذاة، ولم أكن أعرف أنها ستعمل وحدها لاحقاً.", en: "Layan asked me to check the alignment; I did not know she would work alone later." }
              }
            },
            {
              id: "obs_q_engineer_secret",
              category: "secret",
              text: { ar: "لماذا لا تتطابق نسختك من ملف الرصد مع النسخة الأصلية؟", en: "Why does your observation file not match the original copy?" },
              responses: {
                calm: { ar: "اختلاف نسخ العمل أمر عادي أثناء المعالجة.", en: "Differences between working copies are normal during processing." },
                pressing: { ar: "توقف عن اتهامي بالتلاعب؛ كنت أعمل على المعايرة وفق تعليمات الفريق.", en: "Stop accusing me of tampering; I was calibrating according to the team's instructions." },
                sympathetic: { ar: "كانت هناك مشكلة تقنية في النسخة، لا أكثر.", en: "There was a technical issue in the copy, nothing more." }
              },
              secretReveal: {
                approach: "pressing",
                text: { ar: "يعترف فادي بتعديل محاذاة الإشارة لسرقة الفضل، لكنه لا يقر بالقتل إلا بعد مواجهته بالأدلة الحاسمة.", en: "Fadi admits altering the signal alignment to steal credit, but denies the murder until confronted with the decisive evidence." }
              }
            }
          ]
        }
      ]
    }
  ],
  evidence: [
    {
      family: "observatory_last_signal",
      variant: "night_shift",
      scene: [
        {
          id: "obs_point_dome_console",
          name: { ar: "وحدة الرصد", en: "Observation Console" },
          desc: { ar: "تظهر الشاشة ملف الإشارة الأخير وفي سجلها انحراف قصير في محاذاة الطيف.", en: "The screen shows the last signal file and a brief spectral-alignment deviation in its log." },
          x: 68,
          y: 48,
          clueId: "obs_signal_source"
        },
        {
          id: "obs_point_tool",
          name: { ar: "مفتاح المعايرة", en: "Calibration Wrench" },
          desc: { ar: "مفتاح معدني قرب المنصة عليه مسحوق خزفي وآثار استعمال حديثة.", en: "A metal wrench near the platform bears ceramic powder and signs of recent use." },
          x: 74,
          y: 60,
          clueId: "obs_calibration_source"
        },
        {
          id: "obs_point_card_reader",
          name: { ar: "قارئ بطاقة الدخول", en: "Access-Card Reader" },
          desc: { ar: "قارئ باب القبة يحتفظ بنسخة محلية من سجل الدخول رغم انقطاع الشبكة.", en: "The dome door reader kept a local access log despite the network outage." },
          x: 27,
          y: 48,
          clueId: "obs_access_source"
        },
        {
          id: "obs_point_power_log",
          name: { ar: "لوحة الطاقة الاحتياطية", en: "Backup Power Panel" },
          desc: { ar: "دفتر ورقي يسجل بداية انقطاع الكهرباء ونهايته؛ قارنه يدوياً بنافذة الوفاة في تقرير التشريح.", en: "A paper log records when power failed and returned; compare it manually with the autopsy window." },
          x: 18,
          y: 70,
          clueId: "obs_power_log"
        },
        {
          id: "obs_point_glove",
          name: { ar: "قفاز قرب خزانة الأدوات", en: "Glove by the Tool Cabinet" },
          desc: { ar: "قفاز عليه طبعة جزئية تبدو قريبة من نمط قفازات المديرة.", en: "A glove bears a partial print that resembles the director's glove pattern." },
          x: 38,
          y: 31,
          clueId: "obs_director_glove"
        },
        {
          id: "obs_point_archive_note",
          name: { ar: "قصاصة من دفتر الأرشيف", en: "Archive Ledger Scrap" },
          desc: { ar: "قصاصة ممزقة قرب الممر تحمل رقم رف الأطلس القديم.", en: "A torn scrap near the corridor carries the old atlas shelf number." },
          x: 20,
          y: 38,
          clueId: "obs_archive_scrap"
        },
        {
          id: "obs_point_recorder",
          name: { ar: "مسجل صوتي", en: "Audio Recorder" },
          desc: { ar: "مسجل نورا الشخصي يعرض أثراً لمحاولة حذف ملف في نهاية المناوبة.", en: "Noura's personal recorder shows an attempt to delete a file near the end of the shift." },
          x: 47,
          y: 53,
          clueId: "obs_recording_trace"
        },
        {
          id: "point_body",
          name: { ar: "جثة ليان", en: "Layan's Body" },
          desc: { ar: "جثة ليان على أرضية منصة الرصد. فحصها يفتح تقرير الطب الشرعي ويُحتسب كإجراء تحقيق.", en: "Layan's body lies on the observation platform floor. Examining it unlocks the autopsy report and counts as an investigation action." },
          x: 50,
          y: 80,
          clueId: null,
          bodyPresent: true
        }
      ],
      clues: [
        {
          id: "obs_calibration_source",
          name: { ar: "بطانة ورشة فادي على مفتاح المعايرة", en: "Fadi's Workshop Lining on the Calibration Wrench" },
          desc: { ar: "مسحوق خزفي من بطانة لا تستخدم إلا في ورشة الأجهزة التصق بالمفتاح الذي استُخدم قرب منصة الرصد.", en: "Ceramic powder from a lining used only in the instrument workshop is on the wrench found by the observation platform." },
          type: "trace",
          importance: "crucial",
          suspectIds: ["obs_suspect_engineer"],
          analyzable: true,
          labType: "trace",
          certainty: "high",
          labResult: {
            ar: "تطابق المسحوق مع مركب خزفي لا يستخدم إلا في ورشة الأجهزة. سجل الصيانة يثبت أن فادي ناصر استبدل بطانة مفتاح المعايرة ذلك اليوم.",
            en: "The powder matches a ceramic compound used only in the instrument workshop. Maintenance records show Fadi Nasser replaced the calibration wrench's lining that day."
          }
        },
        {
          id: "obs_access_source",
          name: { ar: "بطاقة فادي في سجل دخول القبة", en: "Fadi's Card in the Dome Entry Log" },
          desc: { ar: "النسخة المحلية تسجل دخول بطاقة فادي إلى القبة أثناء انقطاع الكهرباء وخروجها بعد عودة الطاقة.", en: "The local copy records Fadi's card entering the dome during the outage and leaving after power returned." },
          type: "document",
          importance: "crucial",
          suspectIds: ["obs_suspect_engineer"],
          analyzable: true,
          labType: "document",
          certainty: "high",
          paperText: {
            ar: "سجل قارئ القبة — 22:28 دخول: بطاقة فادي ناصر. 22:36 خروج: البطاقة نفسها. الوحدة المحلية حفظت التسلسل كاملاً.",
            en: "Dome reader log — 22:28 entry: Fadi Nasser's card. 22:36 exit: the same card. The local unit preserved the full sequence."
          },
          labResult: {
            ar: "بعد إعادة ترتيب السجل، ثبت أن بطاقة فادي دخلت القبة أثناء انقطاع الكهرباء وغادرتها بعد عودة الطاقة.",
            en: "After reassembling the log, Fadi's card is confirmed entering the dome during the outage and leaving after power returned."
          }
        },
        {
          id: "obs_signal_source",
          name: { ar: "بصمة مهندس الأجهزة على شريحة الرصد", en: "Instrument Engineer's Print on the Observation Chip" },
          desc: { ar: "أثر البصمة على غطاء وحدة تعديل الطيف، وهي وحدة لا يصل إليها إلا مهندس الأجهزة.", en: "The print is on the spectral adjustment unit's cover, accessible only to the instrument engineer." },
          type: "fingerprint",
          importance: "crucial",
          suspectIds: ["obs_suspect_engineer"],
          analyzable: true,
          labType: "fingerprint",
          labSeed: 63812,
          certainty: "high",
          labResult: {
            ar: "البصمة على شريحة ملف الرصد تطابق فادي ناصر. موضعها على غطاء وحدة التعديل لا على سطح اللمس العام.",
            en: "The print on the observation-file chip matches Fadi Nasser. It is on the adjustment-unit cover, not a shared touch surface."
          }
        },
        {
          id: "obs_power_log",
          name: { ar: "سجل انقطاع الكهرباء", en: "Power-Outage Log" },
          desc: { ar: "دفتر مستقل عن تقرير التشريح يسجل انقطاع الطاقة بين 22:26 و22:33. على المحقق مقارنة الزمنين بنفسه؛ لا يربط النظام بينهما تلقائياً.", en: "A log separate from the autopsy report records a power outage from 22:26 to 22:33. The investigator must compare the times; the game does not link them automatically." },
          type: "document",
          importance: "important",
          suspectIds: [],
          analyzable: false,
          paperText: {
            ar: "دفتر الطاقة الاحتياطية: انقطع التيار عن قبة التلسكوب الساعة 22:26، وعادت التغذية المستقرة الساعة 22:33. سجل الصيانة يصف خللاً مؤقتاً في المرحل.",
            en: "Backup power ledger: telescope-dome power failed at 22:26, and stable supply returned at 22:33. The maintenance book records a temporary relay fault."
          }
        },
        {
          id: "obs_director_glove",
          name: { ar: "قفاز المديرة", en: "Director's Glove" },
          desc: { ar: "طبعة جزئية على قفاز قرب الممر، لكنها لا تحدد من وضعه هناك.", en: "A partial print on a glove near the corridor, but it does not establish who left it there." },
          type: "fingerprint",
          importance: "misleading",
          suspectIds: ["obs_suspect_director"],
          misleading: true,
          analyzable: true,
          labType: "fingerprint",
          labSeed: 38291,
          labSuspectIds: ["obs_suspect_director"],
          certainty: "medium",
          labResult: {
            ar: "الطبعة على القفاز تعود لمريم، لكنها طبعة قديمة من الاستخدام اليومي؛ لا أثر لها على جسم الضحية أو أداة الجريمة.",
            en: "The glove print belongs to Mariam, but it is an old mark from routine use; there is no trace on the victim or the weapon."
          }
        },
        {
          id: "obs_archive_scrap",
          name: { ar: "قصاصة الأطلس", en: "Atlas Scrap" },
          desc: { ar: "قصاصة تقود إلى رف أطلس مفقود من الأرشيف.", en: "A scrap points to an atlas missing from the archive shelf." },
          type: "document",
          importance: "misleading",
          suspectIds: ["obs_suspect_caretaker"],
          misleading: true,
          analyzable: true,
          labType: "document",
          paperText: {
            ar: "بطاقة الأرشيف: الأطلس النجمي رقم 14 أُعيد إلى الرف مساء الثلاثاء. خانة التوقيع فارغة، وبجواره أثر ورق ممزق.",
            en: "Archive card: Star atlas number 14 was returned to the shelf Tuesday evening. The signature box is blank, beside a torn-paper mark."
          },
          certainty: "high",
          labResult: {
            ar: "تتطابق القصاصة مع بطاقة الأطلس المفقود. تثبت سرقة من الأرشيف، لكنها لا تربط سالم بوفاة ليان.",
            en: "The scrap matches the missing-atlas card. It confirms an archive theft but does not connect Salem to Layan's death."
          }
        },
        {
          id: "obs_recording_trace",
          name: { ar: "محاولة حذف التسجيل", en: "Deleted-Recording Attempt" },
          desc: { ar: "أثر حذف حديث في المسجل الشخصي لنورا.", en: "A recent deletion trace on Noura's personal recorder." },
          type: "trace",
          importance: "misleading",
          suspectIds: ["obs_suspect_assistant"],
          misleading: true,
          analyzable: true,
          labType: "trace",
          certainty: "high",
          labResult: {
            ar: "استعاد المختبر بيانات وصفية فقط: التسجيل المحذوف كان نقاشاً شخصياً بين ليان ونورا، ولا يتضمن أصواتاً من القبة أو دليلاً على الاعتداء.",
            en: "The lab recovered metadata only: the deleted recording was a personal discussion between Layan and Noura, with no dome sounds or evidence of the assault."
          }
        }
      ],
      requiredKillerClueIds: [
        "obs_calibration_source",
        "obs_access_source",
        "obs_signal_source"
      ],
      requiredFalseLeadIds: [
        "obs_director_glove",
        "obs_archive_scrap",
        "obs_recording_trace"
      ],
      bodyPointId: "point_body",
      powerLogClueId: "obs_power_log",
      timeline: { mode: "manual", outageStart: "22:26", outageEnd: "22:33" }
    }
  ]
};

function chooseCaseTemplateVariant(family) {
  const categories = ["locations", "crimes", "characters", "evidence"];
  const variants = CASE_TEMPLATE_PARTS.locations
    .filter((part) => part.family === family)
    .map((part) => part.variant)
    .filter((variant, index, list) => list.indexOf(variant) === index)
    .filter((variant) => categories.every((category) =>
      CASE_TEMPLATE_PARTS[category].some((part) =>
        part.family === family && part.variant === variant
      )
    ));

  if (!variants.length) {
    throw new Error("No complete case-template variant exists for " + family + ".");
  }

  const variant = variants[Math.floor(Math.random() * variants.length)];
  const selected = {};
  categories.forEach((category) => {
    const parts = CASE_TEMPLATE_PARTS[category].filter((part) =>
      part.family === family && part.variant === variant
    );
    selected[category] = JSON.parse(JSON.stringify(parts[Math.floor(Math.random() * parts.length)]));
  });
  return selected;
}

function generateCaseFromTemplate(family) {
  const selected = chooseCaseTemplateVariant(family);
  const crime = selected.crimes;
  const characters = selected.characters;
  const evidence = selected.evidence;

  return {
    id: "generated_" + family,
    title: crime.title,
    intro: crime.intro,
    victim: crime.victim,
    location: selected.locations.location,
    sceneId: selected.locations.sceneId,
    autopsy: crime.autopsy,
    endings: crime.endings,
    killerId: characters.killerId,
    pressingCooperationMultiplier: 1.5,
    motiveOptions: characters.motiveOptions,
    suspects: characters.suspects,
    scene: evidence.scene,
    clues: evidence.clues,
    generation: {
      templateId: family,
      schemaVersion: 1,
      variant: selected.locations.variant,
      requiredKillerClueIds: evidence.requiredKillerClueIds,
      requiredFalseLeadIds: evidence.requiredFalseLeadIds,
      bodyPointId: evidence.bodyPointId,
      powerLogClueId: evidence.powerLogClueId,
      timeline: evidence.timeline
    }
  };
}

function ensureGeneratedCases() {
  const families = Array.from(new Set(CASE_TEMPLATE_PARTS.locations.map((part) => part.family)));
  const savedCases = Array.isArray(gameState.generatedCases) ? gameState.generatedCases : [];
  const generated = families.map((family) => {
    const saved = savedCases.find((caseObj) =>
      caseObj && caseObj.generation && caseObj.generation.templateId === family &&
      caseObj.generation.schemaVersion === 1
    );
    if (saved && validateCase(saved)) return saved;

    for (let attempt = 1; attempt <= 5; attempt++) {
      const candidate = generateCaseFromTemplate(family);
      if (validateCase(candidate)) return candidate;
    }
    throw new Error("Could not generate a valid case for template " + family + " after 5 attempts.");
  });

  const currentCaseId = gameState.currentCase && gameState.currentCase.id;
  gameState.generatedCases = generated;
  generated.forEach((caseObj) => {
    const existingIndex = CASES.findIndex((entry) => entry.id === caseObj.id);
    if (existingIndex < 0) CASES.push(caseObj);
    else CASES[existingIndex] = caseObj;
  });
  if (currentCaseId) {
    const currentGenerated = generated.find((caseObj) => caseObj.id === currentCaseId);
    if (currentGenerated) gameState.currentCase = currentGenerated;
  }
  saveState();
  return generated;
}
