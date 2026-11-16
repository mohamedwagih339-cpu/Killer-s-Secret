const CASES = [
  {
    "id": "case_001",
    "killerId": "suspect_01",
    "motiveOptions": {
      "correctId": "motive_exposure",
      "options": [
        {
          "id": "motive_theft",
          "text": {
            "ar": "سرقة محتويات خزنة المكتب لسداد ديون متراكمة",
            "en": "Stealing the office safe's contents to pay off mounting debts"
          }
        },
        {
          "id": "motive_exposure",
          "text": {
            "ar": "إسكات الضحية بعد اكتشافه تلاعبها بفواتير الموردين وتهديده بفضحها",
            "en": "Silencing the victim after he discovered her supplier-invoice tampering and threatened to expose her"
          }
        },
        {
          "id": "motive_revenge",
          "text": {
            "ar": "انتقام عاطفي بعد علاقة عمل فاشلة وانتهت بالطرد",
            "en": "A personal revenge after a failed working relationship that ended in dismissal"
          }
        }
      ]
    },
    "endings": {
      "full": {
        "title": {
          "ar": "اعتراف في قاعة المحكمة",
          "en": "Confession in the Courtroom"
        },
        "text": {
          "ar": "عندما وضعت الأدلة الحاسمة أمام {killer}، انهارت تماماً. اعترفت أنها واجهت كريم في مكتبه بعد أن هددها بفضح تلاعبها بفواتير الموردين، وأنها أخذت السكين من مطبخ المطعم في لحظة يأس. القاضي أصدر حكماً بالإدانة، وأُغلق المطعم أبوابه حداداً. أما أنت، فقد خرجت من المحكمة والثقة في عينيك: القضية أُغلقت، والعدالة تحققت.",
          "en": "When you laid the crucial evidence before {killer}, she broke down completely. She confessed that she had confronted Karim in his office after he threatened to expose her supplier-invoice tampering, and that she grabbed the knife from the restaurant kitchen in a moment of despair. The judge handed down a conviction, and the restaurant closed its doors in mourning. You left the courthouse with certainty in your eyes: the case was closed, and justice was served."
        }
      },
      "partial": {
        "title": {
          "ar": "قضية تنهار جزئياً",
          "en": "A Case Partially Collapses"
        },
        "text": {
          "ar": "قدّمت اتهامك، لكنك لم تُحكم شبكة الأدلة حول المتهم. بدا دافعك مرتبكاً، وهاجم المحامي ضعف الأدلة حتى اهتزت صورة القاتل أمام هيئة المحلفين. لم يفُت الأمل تماماً؛ فالقضية أُعيدت للتحقيق وبقيت نجمة واحدة مضاءة في سجلك. ربما كانت هذه فرصة لتتعلم أن الحقيقة تحتاج أكثر من حدس.",
          "en": "You made your accusation, but you did not tighten the net of evidence around the suspect. Your motive sounded confused, and the defense attorney attacked the weak evidence until the killer's image wavered before the jury. All was not lost; the case was sent back for further investigation, and a single star remained lit in your record. Perhaps this was a lesson that the truth needs more than intuition."
        }
      },
      "innocent": {
        "title": {
          "ar": "بريء... والقاتل يهرب",
          "en": "Innocent... and the Killer Escapes"
        },
        "text": {
          "ar": "عندما قرأت الاتهام، نظر إليك {suspect} بذهول ثم انهار باكياً. كشف التحقيق سرّه: {secret} — لكنه لم يكن القاتل. وبينما كانت المحكمة تبرئه، غادرت {killer} المدينة بهدوء، تاركةً خلفها قضية مفتوحة وندماً ثقيلاً. في ملف الشرطة، بقي اسمك مرتبطاً بأخطر خطأ في مسيرتك.",
          "en": "As you read out the accusation, {suspect} stared at you in disbelief and then broke down in tears. The investigation revealed the secret: {secret} — but it was not the killer. While the court cleared the innocent suspect, {killer} quietly left the city, leaving behind an open case and a heavy regret. In the police file, your name remained attached to the gravest mistake of your career."
        }
      }
    },
    "title": {
      "ar": "قتل في المطعم الفاخر",
      "en": "Murder at the Fine Restaurant"
    },
    "intro": {
      "ar": "تم العثور على جثة السيد كريم النمر، صاحب سلسلة مطاعم «النهر الذهبي» الشهيرة، في مكتبه بمقر المطعم الرئيسي، بعد ساعات من إغلاق المطعم ليلاً. لم تكن هناك علامات اقتحام، وكل شيء يشير إلى أن القاتل كان شخصًا يعرف المكان جيدًا.",
      "en": "The body of Mr. Karim Al-Nemer, owner of the famous 'Golden River' restaurant chain, was found in his office at the main restaurant headquarters, hours after the restaurant closed at night. There were no signs of forced entry, and everything indicates the killer was someone who knew the place well."
    },
    "victim": {
      "name": {
        "ar": "كريم النمر",
        "en": "Karim Al-Nemer"
      },
      "description": {
        "ar": "رجل أعمال في الخامسة والأربعين من عمره، اشتهر بمطاعمه الفاخرة وطبيعته الصارمة مع موظفيه.",
        "en": "A 45-year-old businessman known for his luxury restaurants and strict nature with his employees."
      },
      "placeOfDeath": {
        "ar": "مكتب المطعم الرئيسي",
        "en": "Main restaurant office"
      },
      "timeOfDeath": {
        "ar": "في الساعة الحادية عشرة مساءً، بعد إغلاق المطعم بساعة",
        "en": "At 11:00 PM, one hour after the restaurant closed"
      }
    },
    "autopsy": {
      "cause": {
        "ar": "ضربة قوية بجسم صلب على مؤخرة الرأس سببت كسراً في الجمجمة ونزيفاً داخلياً، مع آثار ضغط خفيفة حول الرقبة تشير إلى محاولة إسكات قصيرة قبل الوفاة.",
        "en": "A heavy blow with a blunt object to the back of the head caused a skull fracture and internal bleeding, with mild pressure marks around the neck suggesting a brief attempt to silence the victim before death."
      },
      "deathWindow": {
        "start": "22:40",
        "end": "23:20"
      },
      "findings": [
        {
          "ar": "لا توجد آثار مقاومة عنيفة أو علامات اقتحام؛ الضحية كان يواجه شخصاً يثق به واقفاً خلفه.",
          "en": "No signs of violent struggle or forced entry; the victim was facing someone he trusted, standing behind him."
        },
        {
          "ar": "معدة الضحية تحوي بقايا عشاء خفيف تناول قبل ساعة تقريباً من الوفاة، ما يطابق تقدير الوقت بين العاشرة وأربعين دقيقة والحادية عشرة وعشرين دقيقة مساءً.",
          "en": "The stomach contains remnants of a light dinner eaten about an hour before death, matching the estimated window between 10:40 and 11:20 PM."
        },
        {
          "ar": "آثار عطر نسائي فاخر على ياقة القميص، وعبوة العطر نفسها غير موجودة في المكتب ولا ضمن مقتنيات الضحية.",
          "en": "Traces of an expensive women's perfume on the shirt collar; the bottle itself is missing from the office and the victim's belongings."
        }
      ]
    },
    "location": {
      "name": {
        "ar": "مطعم النهر الذهبي",
        "en": "Golden River Restaurant"
      },
      "description": {
        "ar": "مطعم فاخر في وسط المدينة، يتكون من طابقين ومكتب خاص للمالك في الطابق العلوي.",
        "en": "A luxury restaurant in downtown, consisting of two floors and a private owner's office on the upper floor."
      }
    },
    "scene": [
      {
        "id": "point_desk",
        "name": {
          "ar": "المكتب",
          "en": "Desk"
        },
        "desc": {
          "ar": "مكتب خشبي كبير حيث عمل الضحية.",
          "en": "A large wooden desk where the victim worked."
        },
        "x": 50,
        "y": 45,
        "clueId": "clue_01"
      },
      {
        "id": "point_trash",
        "name": {
          "ar": "سلة المهملات",
          "en": "Trash Bin"
        },
        "desc": {
          "ar": "سلة مهملات ممتلئة بالأوراق الممزقة.",
          "en": "A trash bin full of crumpled papers."
        },
        "x": 82,
        "y": 72,
        "clueId": "clue_02"
      },
      {
        "id": "point_window",
        "name": {
          "ar": "النافذة",
          "en": "Window"
        },
        "desc": {
          "ar": "نافذة واسعة تطل على الشارع الرئيسي.",
          "en": "A large window overlooking the street."
        },
        "x": 18,
        "y": 30,
        "clueId": null
      },
      {
        "id": "point_pocket",
        "name": {
          "ar": "جيب الضحية",
          "en": "Victim's Pocket"
        },
        "desc": {
          "ar": "ملابس الضحية معلقة على كرسي بالقرب من المكتب.",
          "en": "Victim's clothes hanging on a chair near the desk."
        },
        "x": 62,
        "y": 60,
        "clueId": "clue_03"
      },
      {
        "id": "point_floor",
        "name": {
          "ar": "تحت المكتب",
          "en": "Under Desk"
        },
        "desc": {
          "ar": "أرضية مغطاة بالسجاد الداكن تحت المكتب.",
          "en": "Dark carpeted floor under the desk."
        },
        "x": 46,
        "y": 58,
        "clueId": "clue_04"
      },
      {
        "id": "point_bookshelf",
        "name": {
          "ar": "رف الكتب",
          "en": "Bookshelf"
        },
        "desc": {
          "ar": "رف كتب خشبي ممتلئ بالدفاتر والسجلات.",
          "en": "Wooden bookshelf filled with files and records."
        },
        "x": 86,
        "y": 35,
        "clueId": null
      },
      {
        "id": "point_phone",
        "name": {
          "ar": "الهاتف الأرضي",
          "en": "Landline Phone"
        },
        "desc": {
          "ar": "هاتف أرضي قديم على يمين المكتب.",
          "en": "An old landline phone on the right side of the desk."
        },
        "x": 58,
        "y": 40,
        "clueId": "clue_05"
      },
      {
        "id": "point_safe",
        "name": {
          "ar": "الخزنة",
          "en": "Safe"
        },
        "desc": {
          "ar": "خزنة حديدية صغيرة خلف الستار في زاوية الغرفة.",
          "en": "A small iron safe behind the curtain in the corner."
        },
        "x": 72,
        "y": 52,
        "clueId": "clue_06"
      },
      {
        "id": "point_body",
        "name": {
          "ar": "جثة الضحية",
          "en": "Victim's Body"
        },
        "desc": {
          "ar": "جثة كريم النمر ملقاة على الأرض بجوار مكتبه، وقد بدأت علامات التيبس الرمي في الظهور. الطبيب الشرعي ينتظر الإذن لبدء التشريح.",
          "en": "Karim Al-Nemer's body lies on the floor beside his desk, early rigor mortis setting in. The medical examiner is waiting for permission to begin the autopsy."
        },
        "x": 36,
        "y": 60,
        "clueId": null
      },
      {
        "id": "point_torn",
        "name": {
          "ar": "ورق ممزق قرب النافذة",
          "en": "Torn Paper near the Window"
        },
        "desc": {
          "ar": "قطع ورقية ممزقة متناثرة على السجاد قرب النافذة، يبدو أنها جزء من رسالة واحدة.",
          "en": "Torn paper fragments scattered on the carpet near the window, apparently part of a single letter."
        },
        "x": 70,
        "y": 66,
        "clueId": "clue_11"
      },
      {
        "id": "point_vent",
        "name": {
          "ar": "فتحة التهوية الجدارية",
          "en": "Wall Vent"
        },
        "desc": {
          "ar": "فتحة تهوية حديدية بالقرب من الزاوية، مساميرها مفكوكة حديثاً وتخفي شيئاً بداخلها.",
          "en": "Iron wall vent near corner, screws freshly loosened concealing something inside."
        },
        "x": 32,
        "y": 74,
        "clueId": "clue_09",
        "hiddenUntil": {
          "suspectId": "suspect_02",
          "questionId": "q_s2_secret"
        }
      },
      {
        "id": "point_locker",
        "name": {
          "ar": "قاع خزانة المطبخ",
          "en": "Bottom of Kitchen Cabinet"
        },
        "desc": {
          "ar": "لوح خشبي مزدوج يخفي تجويفاً سرياً في أسفل خزانة المطبخ يحوي وثائق مخبأة.",
          "en": "Double wooden board concealing a secret hollow with hidden documents under the kitchen cabinet."
        },
        "x": 22,
        "y": 56,
        "clueId": "clue_10",
        "hiddenUntil": {
          "suspectId": "suspect_01",
          "questionId": "q_s1_secret"
        }
      }
    ],
    "clues": [
      {
        "id": "clue_01",
        "name": {
          "ar": "بصمة إصبع على المكتب",
          "en": "Fingerprint on Desk"
        },
        "desc": {
          "ar": "بصمة إصبع واضحة على الدرج الأيسر للمكتب.",
          "en": "Clear fingerprint on the left desk drawer."
        },
        "type": "fingerprint",
        "importance": "important",
        "suspectIds": [
          "suspect_02",
          "suspect_04"
        ],
        "labSuspectIds": [
          "suspect_02"
        ],
        "analyzable": true,
        "labType": "fingerprint",
        "labSeed": 7241,
        "certainty": "high",
        "labResult": {
          "ar": "بصمة الدرج مطابقة تماماً لبصمة عمر صلاح. موقع البصمة على مقبض الدرج الأيسر يدعم روايته بأنه فتحه بحثاً عن ورقة، لا أنه لمس مكتب الضحية.",
          "en": "The drawer print is an exact match to Omar Salah's fingerprint. Its position on the left drawer handle supports his account of opening it to look for a paper, not touching the victim's desk."
        },
        "labResultMedium": {
          "ar": "أظهرت المطابقة السريعة تشابهاً جزئياً مع بصمة عمر صلاح، لكن جودة الطبعة لا تسمح بالجزم؛ يُنصح بإعادة المطابقة.",
          "en": "A quick comparison showed a partial similarity to Omar Salah's print, but print quality prevents certainty; re-matching is advised."
        }
      },
      {
        "id": "clue_02",
        "name": {
          "ar": "رسالة استقالة ممزقة",
          "en": "Torn Resignation Letter"
        },
        "desc": {
          "ar": "ورقة ممزقة في سلة المهملات تظهر أن الضحية كان ينوي فصل ليلى.",
          "en": "Torn paper in the bin showing the victim intended to fire Layla."
        },
        "type": "document",
        "importance": "crucial",
        "suspectIds": [
          "suspect_01"
        ],
        "analyzable": true,
        "labType": "document",
        "labSeed": 3197,
        "certainty": "high",
        "paperText": {
          "ar": "ليلى، أمامك خياران: استقالة طوعية نهاية الشهر، أو إحالة إلى التحقيق في تلاعب فواتير الموردين. اخترت أن أكون كريماً معك للمرة الأخيرة. كريم النمر",
          "en": "Layla, you have two options: a voluntary resignation at the end of the month, or referral to an investigation into supplier invoice tampering. I chose to be generous with you one last time. Karim Al-Nemer"
        },
        "labResult": {
          "ar": "أُعيد تجميع الورقة: إنها مسودة قرار فصل بخط يد كريم النمر، كُتبت في يوم الوفاة. هذا يثبت وجود مواجهة مباشرة بينه وبين ليلى قبل مقتله.",
          "en": "The paper is reassembled: a draft termination notice in Karim Al-Nemer's handwriting, written on the day of death. This proves a direct confrontation between him and Layla before the murder."
        }
      },
      {
        "id": "clue_03",
        "name": {
          "ar": "مفتاح ذهبي محفور",
          "en": "Engraved Gold Key"
        },
        "desc": {
          "ar": "مفتاح صغير في جيب الضحية محفور عليه الحرف N.",
          "en": "Small key in victim's pocket engraved with letter N."
        },
        "type": "personal",
        "importance": "important",
        "suspectIds": [
          "suspect_03"
        ]
      },
      {
        "id": "clue_04",
        "name": {
          "ar": "بصمة حذاء طينية",
          "en": "Muddy Shoe Print"
        },
        "desc": {
          "ar": "بصمة حذاء تحت المكتب تشير إلى مقاس كبير وطين حديث.",
          "en": "Shoe print under desk indicating large size and fresh mud."
        },
        "type": "trace",
        "importance": "misleading",
        "suspectIds": [
          "suspect_04"
        ],
        "analyzable": true,
        "labType": "trace",
        "certainty": "medium",
        "misleading": true,
        "labResult": {
          "ar": "تحليل الطين يكشف أنه من ممر الحديقة الخارجي، والأثر أقدم من ليلة الجريمة بيومين على الأقل. هو أثر مضلل لا يربط الحارس سامر بلحظة الوفاة.",
          "en": "Soil analysis shows the mud is from the outer garden path, and the print is at least two days older than the murder night. A misleading trace that does not place guard Samir at the time of death."
        }
      },
      {
        "id": "clue_05",
        "name": {
          "ar": "أثر سيجارة مطفأة",
          "en": "Extinguished Cigarette Butt"
        },
        "desc": {
          "ar": "عقب سيجارة تحت المكتب، والضحية لم يكن يدخن.",
          "en": "Cigarette butt under desk; the victim did not smoke."
        },
        "type": "trace",
        "importance": "misleading",
        "suspectIds": [
          "suspect_02"
        ]
      },
      {
        "id": "clue_06",
        "name": {
          "ar": "دفتر حسابات سري",
          "en": "Secret Ledger"
        },
        "desc": {
          "ar": "دفتر في الخزنة يظهر اختلاسات وتلاعب ليلى بفواتير الموردين.",
          "en": "Ledger in safe showing Layla's embezzlement and tampering with supplier invoices."
        },
        "type": "document",
        "importance": "crucial",
        "suspectIds": [
          "suspect_01"
        ]
      },
      {
        "id": "clue_07",
        "name": {
          "ar": "رسالة تهديد",
          "en": "Threatening Note"
        },
        "desc": {
          "ar": "ورقة صغيرة بجوار الهاتف تحمل تهديدًا قصيرًا ومباشرًا.",
          "en": "Small note next to the phone with a short, direct threat."
        },
        "type": "message",
        "importance": "important",
        "suspectIds": [
          "suspect_02"
        ]
      },
      {
        "id": "clue_08",
        "name": {
          "ar": "بطاقة أمن مكسورة",
          "en": "Broken Security Badge"
        },
        "desc": {
          "ar": "بطاقة موظف مكسورة بالقرب من الخزنة في زاوية الغرفة.",
          "en": "Broken employee badge near the safe in the corner."
        },
        "type": "personal",
        "importance": "important",
        "suspectIds": [
          "suspect_04"
        ]
      },
      {
        "id": "clue_09",
        "name": {
          "ar": "مظروف نقود مخفي",
          "en": "Hidden Cash Envelope"
        },
        "desc": {
          "ar": "مظروف سميك يحوي جزءاً من إيرادات المطعم المسروقة، خبأه عمر في فتحة التهوية.",
          "en": "Thick envelope containing part of the stolen restaurant revenue, hidden by Omar in the vent."
        },
        "type": "personal",
        "importance": "important",
        "suspectIds": [
          "suspect_02"
        ]
      },
      {
        "id": "clue_10",
        "name": {
          "ar": "إيصال توريد مشبوه",
          "en": "Suspicious Supplier Receipt"
        },
        "desc": {
          "ar": "إيصال شراء لحوم مبالغ في سعره بختم مورد غير معتمد وعمولة خاصة لليلى.",
          "en": "Overpriced meat supply receipt stamped by unapproved vendor with private kickback to Layla."
        },
        "type": "document",
        "importance": "crucial",
        "suspectIds": [
          "suspect_01"
        ]
      },
      {
        "id": "clue_11",
        "name": {
          "ar": "ورقة تهديد ممزقة",
          "en": "Torn Threat Note"
        },
        "desc": {
          "ar": "ست قطع ورقية ممزقة عثرت عليها متناثرة قرب النافذة، تحمل كلمات مبعثرة بخط اليد.",
          "en": "Six torn paper fragments found scattered near the window, bearing fragmented handwritten words."
        },
        "type": "torn_paper",
        "importance": "crucial",
        "suspectIds": [
          "suspect_01"
        ],
        "analyzable": true,
        "labType": "document",
        "labSeed": 5501,
        "certainty": "high",
        "paperText": {
          "ar": "كريم... أعرف أنك تحتفظ بدفتر الفواتير في الخزنة. أعطني حقي في الشراكة، أو سأكشف كل شيء للجميع. لن أسمح لك بتدمير حياتي. ليلى",
          "en": "Karim... I know you keep the invoice ledger in the safe. Give me my rightful share of the partnership, or I will expose everything. I will not let you destroy my life. Layla"
        },
        "labResult": {
          "ar": "تجميع الورقة يكشف رسالة تهديد كاملة. تحليل الخط يطابقها مع كتابات ليلى حسن، وتمزق الورق حديث جداً؛ ما يضعها في مواجهة مباشرة مع الضحية ليلة الجريمة.",
          "en": "Reassembling the paper reveals a complete threat letter. Handwriting analysis matches Layla Hassan's writing, and the tearing is very recent, placing her in direct confrontation with the victim on the murder night."
        },
        "recoveredClue": {
          "id": "clue_11_full",
          "name": {
            "ar": "رسالة التهديد كاملة",
            "en": "Complete Threat Letter"
          },
          "desc": {
            "ar": "كريم... أعرف أنك تحتفظ بدفتر الفواتير في الخزنة. أعطني حقي في الشراكة، أو سأكشف كل شيء للجميع. لن أسمح لك بتدمير حياتي. — ليلى حسن",
            "en": "Karim... I know you keep the invoice ledger in the safe. Give me my rightful share of the partnership, or I will expose everything. I will not let you destroy my life. — Layla Hassan"
          },
          "type": "message",
          "importance": "crucial",
          "suspectIds": [
            "suspect_01"
          ]
        }
      }
    ],
    "suspects": [
      {
        "id": "suspect_01",
        "name": {
          "ar": "ليلى حسن",
          "en": "Layla Hassan"
        },
        "age": 38,
        "job": {
          "ar": "طباخة رئيسية",
          "en": "Head Chef"
        },
        "relation": {
          "ar": "تعمل في المطعم منذ عشر سنوات",
          "en": "Worked at the restaurant for ten years"
        },
        "alibiWindow": {
          "start": "22:45",
          "end": "23:15"
        },
        "personality": "stubborn",
        "personalityDesc": {
          "ar": "طاهية موهوبة وعنيدة، حادة الطباع وتشعر بالمرارة بعد تجاوزها في الشراكة.",
          "en": "Talented and stubborn head chef, bitter after being passed over for partnership."
        },
        "secret": {
          "ar": "كانت تتلاعب بفواتير الموردين وتختلس عمولات سرية لحسابها، واكتشف كريم ذلك ليلة الحادث.",
          "en": "She was embezzling kickbacks through supplier invoices, and Karim discovered it that night."
        },
        "questions": [
          {
            "id": "q_s1_alibi",
            "category": "alibi",
            "text": {
              "ar": "أين كنتِ وقت وقوع الجريمة بين العاشرة والحادية عشرة ليلاً؟",
              "en": "Where were you at the time of the crime between 10:00 and 11:00 PM?"
            },
            "responses": {
              "calm": {
                "ar": "كنت في المطبخ بمفردي أغلق المعدات وأجرد المواد، ثم غادرت مباشرة إلى منزلي.",
                "en": "I was in the kitchen alone shutting down equipment and inventorying, then went straight home."
              },
              "pressing": {
                "ar": "أخبرتك مراراً! كنت أنظف وأجرد المطبخ! ليس لدي ما أخفيه ولن أسمح لك بالتشكيك في نزاهتي!",
                "en": "I told you repeatedly! I was cleaning and checking inventory! I have nothing to hide and won't be accused!"
              },
              "sympathetic": {
                "ar": "كان يوماً شاقاً ومرهقاً في المطبخ... أنهيت العمل وحدي بعد مغادرة المساعدين وتوجهت للبيت منهكة.",
                "en": "It was an exhausting day in the kitchen... I wrapped up alone after assistants left and headed home weary."
              }
            }
          },
          {
            "id": "q_s1_relation",
            "category": "relation",
            "text": {
              "ar": "كيف كانت طبيعة علاقتك بالسيد كريم مؤخراً؟",
              "en": "What was the nature of your relationship with Mr. Karim recently?"
            },
            "responses": {
              "calm": {
                "ar": "علاقة مهنية ممتازة مبنية على الاحترام المتبادل. كان يثق بي تماماً ولم يفكر يوماً في فصلي أو الاستغناء عني.",
                "en": "An excellent professional relationship of mutual respect. He trusted me completely and never thought of firing me."
              },
              "pressing": {
                "ar": "مهما حاولت النبش وراءنا، علاقتنا كانت وطيدة ولا غبار عليها! كان يعتبرني روح المطعم ولا يفكر أبداً في طردي!",
                "en": "No matter how you dig, our relationship was solid and spotless! He saw me as the soul of the restaurant and would never fire me!"
              },
              "sympathetic": {
                "ar": "عشر سنوات وأنا أخلص لهذا المكان... كان كريم يعلم قيمتي ولم يكن هناك أي خلاف حقيقي أو تفكير في إنهاء عقدي.",
                "en": "Ten years of complete loyalty... Karim knew my value and there was never any real dispute or thought of terminating my contract."
              }
            }
          },
          {
            "id": "q_s1_motive",
            "category": "motive",
            "text": {
              "ar": "ألم تشعري بالغضب الشديد بعد تفضيل ابن أخت كريم عليكِ في الشراكة؟",
              "en": "Didn't you feel deep anger when Karim's nephew was given the partnership instead of you?"
            },
            "responses": {
              "calm": {
                "ar": "القرارات الإدارية تخصه وحده. شعرت ببعض الإحباط بالطبع، لكن هذا سوق العمل ولا يدعو لارتكاب حماقة.",
                "en": "Management decisions were his alone. Naturally I felt disappointed, but that is business, not a reason for folly."
              },
              "pressing": {
                "ar": "هذا افتراء سخيف! هل أقتل رجلاً من أجل ورقة شراكة؟ المطعم سينهار حتماً بدوني على أية حال!",
                "en": "That is ridiculous slander! Would I murder a man over a partnership paper? The restaurant will crumble without me anyway!"
              },
              "sympathetic": {
                "ar": "بصراحة... شعرت بطعنة مؤلمة في الظهر بعد كل ما قدمته، وظلم فادح حرق قلبي، لكنني التزمت الصمت.",
                "en": "Frankly... I felt a painful stab in the back after everything I gave, a burning injustice, yet I stayed silent."
              }
            }
          },
          {
            "id": "q_s1_witness",
            "category": "witness",
            "text": {
              "ar": "هل رأيتِ أي شخص يتحرك بالقرب من مكتب الضحية قبل خروجك؟",
              "en": "Did you see anyone moving near the victim's office before you left?"
            },
            "responses": {
              "calm": {
                "ar": "رأيت النادل عمر يتسكع قرب السلالم المؤدية للمكتب وكان يتلفت بقلق وريبة.",
                "en": "I saw the waiter Omar lingering near the stairs leading to the office, looking around suspiciously."
              },
              "pressing": {
                "ar": "ركزت في مطبخي فقط! لكن عمر كان يصعد الدرج متسللاً خلسة، تحققوا منه هو بدل مضايقتي!",
                "en": "I was focused on my kitchen! But Omar was sneaking up the stairs, go check him instead of harassing me!"
              },
              "sympathetic": {
                "ar": "سمعت صوت مشادة خافتة في الطابق العلوي، ثم رأيت عمر يهرول نازلاً وهو يخفي يديه في جيوبه بذرع.",
                "en": "I heard faint arguing upstairs, then saw Omar rushing down nervously stuffing his hands into his pockets."
              }
            }
          },
          {
            "id": "q_s1_secret",
            "category": "secret",
            "text": {
              "ar": "ما قصة التلاعب بفواتير توريد اللحوم والمواد الغذائية للمطعم؟",
              "en": "What is the story behind the discrepancies in meat and supply invoices for the restaurant?"
            },
            "responses": {
              "calm": {
                "ar": "أسعار السوق تشهد تقلبات مستمرة، والمسؤول المالي هو المخول بمراجعة الحسابات والفواتير.",
                "en": "Market prices fluctuate continuously, and the finance officer is the one responsible for reviewing bills."
              },
              "pressing": {
                "ar": "لست محاسبة في المطعم! اذهب وحاسب الشركات والموردين ودعني وشأني!",
                "en": "I am not an accountant! Go audit the supplier companies and leave me alone!"
              },
              "sympathetic": {
                "ar": "كنت... كنت أتقاضى نسبة خاصة من الموردين لتعويض حقي المهضوم بعد رفض الشراكة. كريم اكتشف ذلك ليلة الحادث وهدد بفضحي وسجني!",
                "en": "I was... taking a private cut from suppliers to make up for my denied partnership. Karim discovered it that night and threatened to ruin and jail me!"
              }
            }
          },
          {
            "id": "q_s1_safe",
            "category": "evidence",
            "text": {
              "ar": "هل تعلمين شيئاً عن الخزنة الحديدية الخاصة بكريم ومحتوياتها؟",
              "en": "Do you know anything about Karim's iron safe and what was inside it?"
            },
            "responses": {
              "calm": {
                "ar": "أعلم مكانها خلف الستار فقط، ولا أحد يملك رمزها السري إلا كريم ونادية المديرة.",
                "en": "I only know it sits behind the curtain; nobody had the code except Karim and Nadia the manager."
              },
              "pressing": {
                "ar": "ما شأني بخزائنه؟ نادية هي التي تضع أنفها في كل صغيرة وكبيرة تخص أمواله ودفاتره!",
                "en": "What do I care about his safes? Nadia is the one sticking her nose into all his finances and books!"
              },
              "sympathetic": {
                "ar": "كان يحتفظ هناك بدفاتر حسابات غير معلنة وأموال طائلة... نادية كانت الوحيدة التي تطلعه عليها بانتظام.",
                "en": "He kept unrecorded ledgers and large cash sums there... Nadia was the only one reviewing them with him regularly."
              }
            }
          }
        ],
        "presentReactions": {
          "clue_02": {
            "text": {
              "ar": "ارتبكت ليلى وتغيرت ملامحها بشدة: 'ك.. كيف وجدتم هذه؟ حسناً، نعم كان ينوي التخلص مني ظلماً بعد أن طالبت بحقي في الشراكة... اعترف أنني كذبت بشأن علاقتنا، لكن هذا لا يعني أنني قتلته!'",
              "en": "Layla recoils, visibly shaken: 'H.. how did you find this? Fine, yes he intended to dismiss me unfairly after I demanded partnership... I admit I lied about our relationship, but that doesn't make me a killer!'"
            },
            "unlockQuestion": {
              "id": "q_s1_unlocked_resignation",
              "category": "secret",
              "text": {
                "ar": "لماذا كذبتِ بشأن نية كريم فصلك وإبعادك عن المطعم؟",
                "en": "Why did you lie about Karim's intention to fire you?"
              },
              "responses": {
                "calm": {
                  "ar": "خشيت أن أصبح المشتبه به الأول... لم أكن أريد أن يعلم أحد بإهانته لي بعد عشر سنوات من الكفاح.",
                  "en": "I feared becoming prime suspect... I didn't want anyone to know how he humiliated me after ten years of struggle."
                },
                "pressing": {
                  "ar": "كذبت لأحمي كرامتي المهنية! أي شخص مكاني كان سيخفي ورقة طرد مهينة كهذه!",
                  "en": "I lied to protect my professional dignity! Anyone in my position would hide such a humiliating firing notice!"
                },
                "sympathetic": {
                  "ar": "كنت خائفة وضائعة... عندما رأيت الجثة أدركت أن أصابع الاتهام ستشير إليّ بسبب تلك الورقة، فأنكرتها بدافع الخوف.",
                  "en": "I was scared and lost... seeing his body I knew fingers would point at me because of that paper, so I denied it out of fear."
                }
              }
            }
          },
          "clue_06": {
            "text": {
              "ar": "شحب وجه ليلى تماماً: 'هذا الدفتر... كان يحتفظ به في خزنته الحديدية! لقد واجهني به في تلك الليلة وهددني بالسجن والتشهير... كنت في حالة انهيار عصبي تام!'",
              "en": "Layla's face pales completely: 'That ledger... he kept it in his iron safe! He confronted me with it that night and threatened prison and scandal... I was in a total nervous breakdown!'"
            },
            "unlockQuestion": {
              "id": "q_s1_unlocked_ledger",
              "category": "evidence",
              "text": {
                "ar": "هل واجهتِ كريم بشأن هذا الدفتر قبل وقوع الجريمة بدقائق؟",
                "en": "Did you confront Karim about this ledger minutes before the murder?"
              },
              "responses": {
                "calm": {
                  "ar": "نعم... توسلت إليه ألا يدمر حياتي المهنية، لكنه كان متعجرفاً ورفض الاستماع إليّ.",
                  "en": "Yes... I begged him not to destroy my career, but he was arrogant and refused to listen."
                },
                "pressing": {
                  "ar": "كف عن استجوابي كأنني مدانة! تشاجرنا نعم، لكنني تركته حياً في مكتبه وأغلقت الباب خلفي!",
                  "en": "Stop interrogating me as if convicted! We argued yes, but I left him alive in his office and shut the door!"
                },
                "sympathetic": {
                  "ar": "كانت أسوأ ليلة في حياتي... صرخ في وجهي وطردني، وخرجت وأنا أبكي منهارة ولم أعد للمكتب بعدها.",
                  "en": "It was the worst night of my life... he shouted and kicked me out, and I left crying uncontrollably."
                }
              }
            }
          },
          "clue_10": {
            "text": {
              "ar": "تراجعت ليلى خطوة للخلف: 'هذا الإيصال السري... كان في قاع خزانتي بالمطبخ! نعم، كنت أتعامل مع مورد خارجي... لكن كريم هو من دفعني لذلك ببخله الشديد!'",
              "en": "Layla takes a step back: 'That secret receipt... was hidden under my kitchen cabinet! Yes, I dealt with an outside vendor... but Karim drove me to it with his sheer greed!'"
            },
            "unlockQuestion": {
              "id": "q_s1_unlocked_receipt",
              "category": "evidence",
              "text": {
                "ar": "هل اكتشف كريم هذا الإيصال تحديداً قبل مقتله؟",
                "en": "Did Karim discover this specific receipt before his death?"
              },
              "responses": {
                "calm": {
                  "ar": "كان يراجع دفاتر التوريد أسبوعياً، وأخبرني في ذلك المساء أنه يشك بوجود تلاعب بالأسعار.",
                  "en": "He audited supply books weekly, and told me that evening he suspected price tampering."
                },
                "pressing": {
                  "ar": "لم يكن يملك دليلاً قاطعاً! كان يهدد بالظنون فقط ليحرمني من مستحقاتي المالية!",
                  "en": "He had no conclusive proof! He was threatening on mere suspicions to withhold my dues!"
                },
                "sympathetic": {
                  "ar": "نعم، لوّح به في وجهي... شعرت بأن الأرض تميد بي، وكان ذلك دافع الخلاف العنيف بيننا في تلك الليلة المشؤومة.",
                  "en": "Yes, he waved it in my face... I felt the ground slipping, which sparked our violent argument that fateful night."
                }
              }
            }
          },
          "clue_11_full": {
            "text": {
              "ar": "ليلى تحدق في الرسالة الملصقة ويداها ترتجفان: 'أنا كتبتها... نعم! كتبتها في لحظة يأس بعد أن رفض إعطائي حقي، وتركتها على مكتبه ليلة الحادث. لكنني لم أقتله! أردت أن يخاف فقط!'",
              "en": "Layla stares at the reassembled letter, hands trembling: 'I wrote it... yes! I wrote it in a moment of despair after he refused my share, and left it on his desk that night. But I didn't kill him! I only wanted him to fear!'"
            },
            "unlockQuestion": {
              "id": "q_s1_unlocked_threat",
              "category": "evidence",
              "text": {
                "ar": "هل عدتِ إلى المكتب بعد أن تركتِ رسالة التهديد؟",
                "en": "Did you return to the office after leaving the threat note?"
              },
              "responses": {
                "calm": {
                  "ar": "تركت الورقة وخرجت... ثم توقفت في الرواق وأعدت التفكير، لكنني لم أدخل المكتب مرة أخرى.",
                  "en": "I left the note and walked out... then paused in the hallway to reconsider, but never entered the office again."
                },
                "pressing": {
                  "ar": "لا! خرجت من الباب الخلفي مباشرة والحارس رآني! لن أضيف كذبة جديدة إلى أكاذيبي.",
                  "en": "No! I went straight out the back door and the guard saw me! I won't add another lie to my lies."
                },
                "sympathetic": {
                  "ar": "نعم... عدت لأستعيد الورقة، لكن الباب كان مغلقاً فانصرفت خائفة دون أن أرى أحداً.",
                  "en": "Yes... I came back to retrieve the note, but the door was locked, so I left in fear without seeing anyone."
                }
              }
            }
          }
        }
      },
      {
        "id": "suspect_02",
        "name": {
          "ar": "عمر صلاح",
          "en": "Omar Salah"
        },
        "age": 26,
        "job": {
          "ar": "نادل",
          "en": "Waiter"
        },
        "relation": {
          "ar": "موظف جديد في المطعم",
          "en": "New employee at the restaurant"
        },
        "alibiWindow": {
          "start": "21:40",
          "end": "22:20"
        },
        "personality": "nervous",
        "personalityDesc": {
          "ar": "شاب متهور ومضطرب، يتصرف بعصبية وقلق دائمين بسبب ديون متراكمة.",
          "en": "Reckless and anxious young man, constantly nervous due to accumulated debts."
        },
        "secret": {
          "ar": "سرق مبالغ نقدية من صندوق المطعم لتسديد ديون قمار لجهات مشبوهة، وكان مهدداً بالسجن.",
          "en": "He stole cash from the register to pay off gambling debts to shady figures and faced prison."
        },
        "questions": [
          {
            "id": "q_s2_alibi",
            "category": "alibi",
            "text": {
              "ar": "أين كنت تحديداً بين العاشرة والحادية عشرة ليلة الحادث؟",
              "en": "Where exactly were you between 10:00 and 11:00 PM on the night of the incident?"
            },
            "responses": {
              "calm": {
                "ar": "كنت أرتب الطاولات وأنظف الصالة السفلية ثم خرجت مباشرة نحو موقف الحافلات.",
                "en": "I was clearing tables and cleaning the lower hall, then walked straight to the bus stop."
              },
              "pressing": {
                "ar": "أقسم بالله لم ألمسه! كنت في الصالة وحدي أنظف الزجاج، أرجوك لا تلقِ التهمة عليّ!",
                "en": "I swear to God I didn't touch him! I was alone cleaning glass, please don't pin this on me!"
              },
              "sympathetic": {
                "ar": "كنت مرعوباً ووحيداً في الصالة السفلية... كنت أريد فقط إنهاء ورديتي والهروب إلى المنزل.",
                "en": "I was terrified and alone in the lower dining room... I just wanted to finish my shift and rush home."
              }
            }
          },
          {
            "id": "q_s2_relation",
            "category": "relation",
            "text": {
              "ar": "ما سبب الخلاف الحاد الذي وقع بينك وبين السيد كريم مؤخراً؟",
              "en": "What was the cause of the sharp dispute between you and Mr. Karim recently?"
            },
            "responses": {
              "calm": {
                "ar": "سوء فهم بسيط حول عجز نقدي في الخزينة، ووعدته بتعويضه من راتب الشهر القادم.",
                "en": "A minor misunderstanding regarding a cash deficit in the drawer, and I promised to repay it from next salary."
              },
              "pressing": {
                "ar": "حسناً حسناً! أمسك بي وأنا آخذ مالاً من الصندوق، وهدد بجلبي للشرطة وفضحي وحبسي! لكنني لم أقتله أبداً!",
                "en": "Fine, fine! He caught me taking money from the register, threatened police and prison! But I never killed him!"
              },
              "sympathetic": {
                "ar": "كريم واجهني بغضب جامح وكاد يضربني بعد اكتشاف نقص النقود... كان كابوساً دمر أعصابي تماماً.",
                "en": "Karim confronted me with wild fury and almost struck me over the missing cash... it was a nightmare that broke my nerves."
              }
            }
          },
          {
            "id": "q_s2_motive",
            "category": "motive",
            "text": {
              "ar": "ألم يكن تهديده بالزج بك في السجن دافعاً قوياً للتخلص منه؟",
              "en": "Wasn't his threat of throwing you in jail a strong motive to get rid of him?"
            },
            "responses": {
              "calm": {
                "ar": "السجن عقوبة سرقة وتنقضي، لكن القتل عقوبته الإعدام! لست مجنوناً لأقدم على هذا.",
                "en": "Prison is a theft penalty that passes, but murder is execution! I am not insane to do that."
              },
              "pressing": {
                "ar": "لا! مستحيل! أنا جبان وأرتجف من خيالي، فكيف أقدم على قتل إنسان وخنقه بدم بارد؟!",
                "en": "No! Impossible! I am a coward trembling at shadows, how could I murder someone in cold blood?!"
              },
              "sympathetic": {
                "ar": "كنت أفكر فقط في استعطافه والتنازل... لم يخطر ببالي أبداً إيذاء رجل وفر لي وظيفة.",
                "en": "I only thought of begging him for mercy... hurting the man who gave me a job never crossed my mind."
              }
            }
          },
          {
            "id": "q_s2_witness",
            "category": "witness",
            "text": {
              "ar": "هل صعدت للطابق العلوي ليلة الجريمة ورأيت أحداً هناك؟",
              "en": "Did you go upstairs on the night of the crime and see anyone there?"
            },
            "responses": {
              "calm": {
                "ar": "صعدت لأعيد دفتر الفواتير للمكتب، لكنني سمعت أصواتاً حادة فعدت أدراجي خائفاً.",
                "en": "I went up to return the billing book, but heard loud arguing and retreated in fear."
              },
              "pressing": {
                "ar": "صعدت لأعتذر له وأرجوه! لكنني رأيت ليلى رئيسة الطهاة تخرج من مكتبه ووجهها مشتعل بالشر والغيظ!",
                "en": "I went up to apologize and plead! But I saw chef Layla exiting his office with a face burning with venom and fury!"
              },
              "sympathetic": {
                "ar": "الحقيقة... رأيت ليلى تتحدث معه في الرواق العلوي بنبرة تهديد ووعيد قبل دخوله المكتب بلحظات.",
                "en": "Truth is... I saw Layla speaking to him in the upper hallway with threatening words moments before he entered."
              }
            }
          },
          {
            "id": "q_s2_secret",
            "category": "secret",
            "text": {
              "ar": "لماذا كنت بحاجة ملحة لسرقة أموال الصندوق بتلك الطريقة؟",
              "en": "Why were you in desperate need to steal the register cash like that?"
            },
            "responses": {
              "calm": {
                "ar": "كنت أمر بضائقة مادية عائلية صعبة وديون متراكمة لم أستطع سدادها.",
                "en": "I was going through tough family financial trouble and accumulated debts I couldn't cover."
              },
              "pressing": {
                "ar": "ورطت نفسي في قمار سري مع بلطجية هددوني بكسر عظامي إن لم أسدد في تلك الليلة! كنت مرعوباً على حياتي!",
                "en": "I entangled myself in underground gambling with thugs threatening to break my bones if I didn't pay that night! I feared for my life!"
              },
              "sympathetic": {
                "ar": "القمار دمرني يا سيدي... كنت محاصراً بالديون والتهديدات ولم أجد سبيلاً سوى مد يدي للصندوق، وأنا نادم أشد الندم.",
                "en": "Gambling ruined me sir... I was cornered by debts and threats, finding no way out except taking from the till, and I deeply regret it."
              }
            }
          },
          {
            "id": "q_s2_desk",
            "category": "evidence",
            "text": {
              "ar": "عثرنا على بصمتك على درج مكتب كريم، كيف تبرر ذلك؟",
              "en": "We found your fingerprint on Karim's desk drawer, how do you justify that?"
            },
            "responses": {
              "calm": {
                "ar": "أنا مسؤول عن تنظيف المكتب ومسح الأثاث كل صباح، ومن البديهي وجود بصماتي هناك.",
                "en": "I am tasked with dusting the office and wiping furniture each morning, so my prints are natural there."
              },
              "pressing": {
                "ar": "كنت أبحث عن بطاقة هويتي التي احتجزها كريم في الدرج! فتحته ولم أجدها فهربت مسرعاً دون أن ألمس شيئاً آخر!",
                "en": "I was looking for my ID card that Karim withheld in the drawer! I opened it, didn't find it, and ran without touching anything else!"
              },
              "sympathetic": {
                "ar": "أردت فقط استرجاع ورقة تعهد خطي وقعتها له تحت التهديد... فتحت الدرج خائفاً ثم سمعت صوتاً فهربت فوراً.",
                "en": "I only wanted to retrieve a written pledge I signed under coercion... I opened the drawer terrified, heard a noise, and fled."
              }
            }
          }
        ],
        "presentReactions": {
          "clue_01": {
            "text": {
              "ar": "عمر يفرك يديه باضطراب ويرتجف: 'حسناً... سأقول الحقيقة! فتحت الدرج لأنني كنت أبحث عن ورقة تعهد سرقة الصندوق لأمزقها، لكنني لم أجدها!'",
              "en": "Omar rubs his hands nervously trembling: 'Fine... I will tell truth! I opened the drawer looking for my signed theft pledge to shred it, but didn't find it!'"
            },
            "unlockQuestion": {
              "id": "q_s2_unlocked_drawer",
              "category": "evidence",
              "text": {
                "ar": "ماذا رأيت داخل الدرج عندما فتحته؟",
                "en": "What did you see inside the drawer when you opened it?"
              },
              "responses": {
                "calm": {
                  "ar": "رأيت أوراق فواتير وأختام رسمية ومفتاحاً ذهبياً صغيراً، لم ألمس شيئاً وأغلقت الدرج فوراً.",
                  "en": "I saw invoice papers, official seals, and a small gold key; I touched nothing and shut it immediately."
                },
                "pressing": {
                  "ar": "أخبرتك أنني لم أجد ورقتي! كان الدرج مليئاً بالأوراق ولم أسرق شيئاً صدقني!",
                  "en": "I told you I didn't find my paper! The drawer was full of papers and I stole nothing believe me!"
                },
                "sympathetic": {
                  "ar": "كنت أرتجف رعباً... لم ألمس سوى مقبض الدرج، وعندما سمعت خطى في الممر هربت مسرعاً.",
                  "en": "I was shaking with fear... I only touched the handle, and hearing footsteps in the corridor I fled."
                }
              }
            }
          },
          "clue_07": {
            "text": {
              "ar": "عمر يسقط رأسه بين يديه: 'نعم... خط يدي! كتبتها وأنا غائب عن الوعي من القهر بعد أن صفعني وهددني بالحبس... لكنني تركتها بعد الظهر ولم أقتله!'",
              "en": "Omar drops his head into his hands: 'Yes... my handwriting! I wrote it in blind rage after he slapped me and threatened prison... but I left it in the afternoon and didn't kill him!'"
            },
            "unlockQuestion": {
              "id": "q_s2_unlocked_note",
              "category": "motive",
              "text": {
                "ar": "هل كانت عبارات التهديد تعبيراً عن نية حقيقية للانتقام؟",
                "en": "Were the threatening words an expression of actual intent for revenge?"
              },
              "responses": {
                "calm": {
                  "ar": "مجرد حماقة شاب متهور كادت تودي به، وتمنيت لو لم أكتب ذلك السطر الأحمق أبداً.",
                  "en": "Just the folly of a reckless youth that almost doomed him, I wished I never wrote that stupid line."
                },
                "pressing": {
                  "ar": "لو كنت أنوي قتله حقاً هل كنت سأترك رسالة بخط يدي بجانبه؟ هذا دليل براءتي لا إدانتي!",
                  "en": "If I truly intended murder would I leave a handwritten note next to him? That proves innocence, not guilt!"
                },
                "sympathetic": {
                  "ar": "كنت محطماً ويائساً... الديون كانت تخنقني والإهانة جرحتني، فكتبت الرسالة في فورة غضب دون تفكير عاقل.",
                  "en": "I was crushed and desperate... debts suffocating and insults stinging, I wrote in a fury without rational thought."
                }
              }
            }
          },
          "clue_09": {
            "text": {
              "ar": "عمر يشهق فزعاً: 'المظروف في فتحة التهوية! نعم، هي النقود التي أخذتها من الصندوق... لم أستطع تسليمها للمقامرين بعد أن وقعت الجريمة وخشيت الشرطة!'",
              "en": "Omar gasps in horror: 'The envelope in the vent! Yes, that's the money I took from the till... I couldn't deliver it to gamblers after the crime happened fearing police!'"
            },
            "unlockQuestion": {
              "id": "q_s2_unlocked_cash",
              "category": "secret",
              "text": {
                "ar": "هل رآك كريم وأنت تخفي مظروف النقود في فتحة التهوية؟",
                "en": "Did Karim see you hiding the cash envelope in the vent?"
              },
              "responses": {
                "calm": {
                  "ar": "لا، وضعتها بعد خروج الجميع وقبل أن أصعد للاعتذار له، وكان المكان هادئاً تماماً.",
                  "en": "No, I put it there after everyone left before going up to apologize, the place was quiet."
                },
                "pressing": {
                  "ar": "مستحيل! كابينة التهوية في الطابق الأرضي وكريم كان في مكتبه بالطابق العلوي طوال الوقت!",
                  "en": "Impossible! The vent is on the ground floor and Karim was in his upstairs office the whole time!"
                },
                "sympathetic": {
                  "ar": "كنت أتحرك في الظلام كاللص الخائف... لم يرني أحد، وأعدكم بأن أعيد كل قرش لأهله.",
                  "en": "I moved in darkness like a frightened thief... nobody saw me, and I promise to repay every penny."
                }
              }
            }
          }
        }
      },
      {
        "id": "suspect_03",
        "name": {
          "ar": "نادية فريد",
          "en": "Nadia Farid"
        },
        "age": 41,
        "job": {
          "ar": "مديرة المطعم",
          "en": "Restaurant Manager"
        },
        "relation": {
          "ar": "تشرف على التشغيل اليومي للمطعم",
          "en": "Oversees daily restaurant operations"
        },
        "alibiWindow": {
          "start": "21:15",
          "end": "22:15"
        },
        "personality": "proud",
        "personalityDesc": {
          "ar": "سيدة أعمال صارمة وواثقة، تعتز بكرامتها وتتحكم في انفعالاتها بذكاء وهيبة.",
          "en": "Strict and confident businesswoman, proud of her status and calculating with authority."
        },
        "secret": {
          "ar": "كانت تستنسخ بيانات الزبائن والعقود لافتتاح مطعم منافس وسحب زبائن النهر الذهبي.",
          "en": "She was copying client records and contracts to launch a rival venue and siphon customers."
        },
        "questions": [
          {
            "id": "q_s3_alibi",
            "category": "alibi",
            "text": {
              "ar": "أين كنتِ بدقة ليلة مقتل السيد كريم النمر؟",
              "en": "Where were you precisely on the night Mr. Karim Al-Nemer was murdered?"
            },
            "responses": {
              "calm": {
                "ar": "أغلقت السجلات اليومية في التاسعة والنصف، ثم توجهت إلى النادي الرياضي وبقيت هناك حتى منتصف الليل.",
                "en": "I closed daily registers at 9:30, then drove to the sports club and stayed until midnight."
              },
              "pressing": {
                "ar": "لن أقبل استجوابي بنبرة اتهام رخيصة! كاميرات بوابة النادي وبطاقة عضويتي تسجل دخولي في العاشرة والربع تماماً!",
                "en": "I will not accept being questioned with cheap accusation tones! Club gate cameras and membership log my entry at 10:15 sharp!"
              },
              "sympathetic": {
                "ar": "ضغط العمل كان خانقاً ذلك اليوم... ذهبت للنادي للسباحة وتصفية ذهني، وسجلات الحضور تثبت ذلك بكل دقة.",
                "en": "Work stress was suffocating that day... I went to the club pool to clear my mind, and attendance logs verify it accurately."
              }
            }
          },
          {
            "id": "q_s3_relation",
            "category": "relation",
            "text": {
              "ar": "كيف تصفين شراكتك وعلاقتك بالضحية على الصعيدين المهني والشخصي؟",
              "en": "How would you describe your partnership and relation with the victim professionally and personally?"
            },
            "responses": {
              "calm": {
                "ar": "شراكة عمل ناجحة امتدت لخمس سنوات. كريم كان يعتمد على حنكتي الإدارية لتحقيق أرباح قياسية.",
                "en": "A successful business partnership spanning five years. Karim relied on my administrative acumen for record profits."
              },
              "pressing": {
                "ar": "كريم كان مديناً لي بنجاح هذه المؤسسة! لولا انضباطي الإداري لانهار المطعم تحت فوضى طهاته وعماله!",
                "en": "Karim owed the success of this venue to me! Without my discipline the restaurant would have collapsed into chaos!"
              },
              "sympathetic": {
                "ar": "رغم كفاءته كرجل أعمال، كان سلطوياً وصعب المراس، لكنني احترمت مسافاتي المهنية معه لتفادي التصادم.",
                "en": "Despite his business efficiency, he was authoritarian and difficult, yet I kept professional boundaries to avoid clashes."
              }
            }
          },
          {
            "id": "q_s3_motive",
            "category": "motive",
            "text": {
              "ar": "هل كانت بينكما خلافات حادة حول نسب الأرباح أو إدارة الفروع؟",
              "en": "Were there sharp disputes between you regarding profit shares or branch management?"
            },
            "responses": {
              "calm": {
                "ar": "خلافات الرؤى المالية أمر معتاد بين الشركاء، وكل شيء كان محكوماً بعقود موثقة رسمياً.",
                "en": "Differing financial perspectives are common among partners, and everything was governed by notarized contracts."
              },
              "pressing": {
                "ar": "حقوقي المالية مؤمنة بقوة القانون ولا أحتاج لارتكاب جريمة حمقاء للحصول على قرش واحد!",
                "en": "My financial entitlements are secured by the rule of law; I do not need a foolish crime to claim a single penny!"
              },
              "sympathetic": {
                "ar": "في الآونة الأخيرة كان ينفرد بقرارات مالية غير محسوبة تضر بمصالحنا المشتركة، وحاولت مراراً تنبيهه بعقلانية.",
                "en": "Lately he was making reckless financial moves behind my back damaging our joint interests, and I tried to caution him reasonably."
              }
            }
          },
          {
            "id": "q_s3_witness",
            "category": "witness",
            "text": {
              "ar": "ما الملاحظات المريبة التي رصدتها بين طاقم المطعم قبل وقوع الحادث؟",
              "en": "What suspicious observations did you spot among restaurant staff before the incident?"
            },
            "responses": {
              "calm": {
                "ar": "ليلى كانت في حالة غضب عارم تصرخ على مساعديها بعد علمها النهائي برفض طلب الشراكة.",
                "en": "Layla was in a state of boiling rage yelling at assistants after hearing the final refusal of her partnership bid."
              },
              "pressing": {
                "ar": "الجميع كان في حالة توتر مريب! ليلى هددت بخراب المكان، وعمر كان يتصرف كفأر مذعور بعد كشف سرقاته!",
                "en": "Everyone was noticeably agitated! Layla threatened ruined prospects, and Omar behaved like a panicked rat after his theft was caught!"
              },
              "sympathetic": {
                "ar": "رأيت ليلى تمزق مستندات في المطبخ وتبدو منهارة وعينيها ممتلئتان بالدموع والوعيد قبل موعد الإغلاق.",
                "en": "I saw Layla shredding documents in the kitchen looking distraught with tearful and threatening eyes before closing time."
              }
            }
          },
          {
            "id": "q_s3_secret",
            "category": "secret",
            "text": {
              "ar": "ما سر المفتاح الذهبي المحفور بحرف N الذي عثرنا عليه في جيب الضحية؟",
              "en": "What is the secret of the engraved gold key with letter N found in the victim's pocket?"
            },
            "responses": {
              "calm": {
                "ar": "هذا مفتاح خزانتي الشخصية... كريم استولى عليه بعدما اكتشف نيتي تأسيس مشروعي المستقل وأخذ قوائم الزبائن.",
                "en": "That is the key to my personal locker... Karim seized it after discovering my plan to found an independent restaurant using client lists."
              },
              "pressing": {
                "ar": "هذا شأن تجاري بحت وخلاف مدني بين شريكين! ليس من حق أحد تجريم طموحي الاستثماري المشروع!",
                "en": "This is purely commercial and a civil dispute between partners! Nobody has the right to criminalize my legitimate ambitions!"
              },
              "sympathetic": {
                "ar": "كنت أريد فقط ضمان مستقبلي وتأسيس مطعمي الخاص... كريم صادر مفتاحي وهددني بإنهاء مسيرتي المهنية إذا نافسته.",
                "en": "I only wanted to secure my future and launch my own place... Karim confiscated my key and threatened to end my career if I competed."
              }
            }
          },
          {
            "id": "q_s3_safe",
            "category": "evidence",
            "text": {
              "ar": "من كان يمتلك رمز فتح الخزنة الحديدية في مكتب كريم غيرك؟",
              "en": "Who had the code to open the iron safe in Karim's office other than yourself?"
            },
            "responses": {
              "calm": {
                "ar": "كريم وأنا فقط، ولم أفتحها منذ مراجعة السيولة النقدية للأسبوع الماضي.",
                "en": "Only Karim and myself, and I hadn't opened it since reviewing last week's cash flow."
              },
              "pressing": {
                "ar": "إذا كنتم تبحثون عن أسرار الخزنة فابحثوا عن ليلى! كريم واجهها بدفتر فواتيرها المسروقة من هناك ليلة مقتله!",
                "en": "If you seek safe secrets look into Layla! Karim confronted her that night with her stolen invoice ledger retrieved from there!"
              },
              "sympathetic": {
                "ar": "الخزنة كانت تحوي دفاتر حساسة... كريم احتفظ هناك بأدلة إدانة ضد كل من خانه في هذا المكان.",
                "en": "The safe contained sensitive ledgers... Karim kept incriminating evidence in there against anyone who betrayed him."
              }
            }
          }
        ],
        "presentReactions": {
          "clue_03": {
            "text": {
              "ar": "نادية تتنحنح وتحاول استعادة هدوئها: 'المفتاح الذهبي... كان في جيبه؟ نعم، هذا مفتاح خزانتي الخاصة في مكتب الإدارة. صادرَه مني بعدما واجهني بمعرفته بمشروعي المستقل!'",
              "en": "Nadia clears her throat trying to regain poise: 'The gold key... in his pocket? Yes, that is the key to my private management locker. He confiscated it after learning of my independent venture!'"
            },
            "unlockQuestion": {
              "id": "q_s3_unlocked_key",
              "category": "secret",
              "text": {
                "ar": "هل ذهبتِ لمكتب كريم لاسترجاع المفتاح الذهبي ليلة مقتله؟",
                "en": "Did you go to Karim's office to retrieve the gold key on the night of his death?"
              },
              "responses": {
                "calm": {
                  "ar": "فكرت في ذلك، لكنني قررت اللجوء لمحامي لفض الشراكة رسمياً وتفادي الاحتكاك المباشر به.",
                  "en": "I thought about it, but chose legal counsel to dissolve partnership formally and avoid direct clashes."
                },
                "pressing": {
                  "ar": "أخبرتكم مسبقاً أنني كنت في النادي الرياضي! لن أضيع مستقبلي من أجل مفتاح خزانة يمكن كسره بسهولة!",
                  "en": "I told you I was at the sports club! I wouldn't risk my future for a locker key easily replaced!"
                },
                "sympathetic": {
                  "ar": "كنت في غاية الغيظ من تصرفه الاستبدادي، لكنني ضبطت أعصابي وفضلت الحلول القانونية الرزينة.",
                  "en": "I was furious at his tyrannical behavior, but held my nerve preferring dignified legal solutions."
                }
              }
            }
          }
        }
      },
      {
        "id": "suspect_04",
        "name": {
          "ar": "سامر خالد",
          "en": "Samir Khaled"
        },
        "age": 50,
        "job": {
          "ar": "حارس أمن",
          "en": "Security Guard"
        },
        "relation": {
          "ar": "مسؤول عن أمن المطعم ليلاً",
          "en": "Responsible for restaurant security at night"
        },
        "alibiWindow": {
          "start": "22:30",
          "end": "23:30"
        },
        "personality": "calm",
        "personalityDesc": {
          "ar": "رجل مسن هادئ الطباع وبطيء الحركة، يعاني من الإرهاق ويحاول تجنب أي مشاكل.",
          "en": "Elderly guard, calm and slow-moving, fatigued and trying to avoid any trouble."
        },
        "secret": {
          "ar": "غرق في نوم عميق تحت تأثير مسكنات قوية داخل كابينة الحراسة، وأهمل مراقبة الكاميرات والإنذار.",
          "en": "He fell into a deep sleep under strong painkiller medication in his booth and neglected monitoring cameras and alarms."
        },
        "questions": [
          {
            "id": "q_s4_alibi",
            "category": "alibi",
            "text": {
              "ar": "أين كنت متواجداً أثناء نوبة حراستك الليلية بين العاشرة والحادية عشرة؟",
              "en": "Where were you stationed during your night guard shift between 10:00 and 11:00 PM?"
            },
            "responses": {
              "calm": {
                "ar": "كنت أقوم بجولاتي التفتيشية المعتادة على محيط السور الخارجي والبوابات الرئيسية.",
                "en": "I was carrying out my routine inspection rounds along the outer fence and main gates."
              },
              "pressing": {
                "ar": "قمت بواجبي كاملاً على أكمل وجه! الأبواب الخارجية كانت مغلقة ولم يقتحم أحد المكان من الخارج أبداً!",
                "en": "I performed my duty completely! Outer doors were locked and no outsider ever broke into the place!"
              },
              "sympathetic": {
                "ar": "الحقيقة يا سيدي... شعرت بإعياء شديد في ساقي وجلست في غرفة الحراسة قليلاً للاستراحة.",
                "en": "The truth sir... I felt severe pain in my leg and sat down in the guard booth for a brief rest."
              }
            }
          },
          {
            "id": "q_s4_relation",
            "category": "relation",
            "text": {
              "ar": "كيف كانت معاملة الضحية كريم النمر لك كمسؤول أمن؟",
              "en": "How did the victim Karim Al-Nemer treat you as a security officer?"
            },
            "responses": {
              "calm": {
                "ar": "معاملة رسمية جداً، لم يكن هناك احتكاك مباشر إلا عند تسليم مفاتيح البوابة نهاية الأسبوع.",
                "en": "Very formal treatment, there was rarely direct contact except handing over gate keys on weekends."
              },
              "pressing": {
                "ar": "كان قاسياً ويخصم من راتبي عند كل هفوة صغيرة! لكنني رجل أخاف الله ولم أضره في حياتي!",
                "en": "He was stern and docked my wages for every small mistake! But I fear God and never harmed him in my life!"
              },
              "sympathetic": {
                "ar": "لم يكن يراعي سني أو ظروفي الصحية الصعبة، لكنني كنت أصبر من أجل توفير علاج أسرتي وقوت يومهم.",
                "en": "He did not consider my age or poor health, yet I endured with patience to afford family medicine and daily bread."
              }
            }
          },
          {
            "id": "q_s4_motive",
            "category": "motive",
            "text": {
              "ar": "ألم يدفعك خصم راتبك وسوء معاملته للرغبة في الانتقام منه؟",
              "en": "Didn't wage deductions and ill-treatment push you to seek revenge on him?"
            },
            "responses": {
              "calm": {
                "ar": "أنا رجل في الخمسين من عمري، أبحث عن الستر والسلامة ولا أبيع آخرتي من أجل مال زائل.",
                "en": "I am a 50-year-old man seeking peace and dignity, and I would never forfeit my afterlife for fleeting money."
              },
              "pressing": {
                "ar": "أقتل رجلاً من أجل خصم يومين؟ هل تراني فاقداً لعقلي لأقضي شيبتي في غياهب السجون؟!",
                "en": "Kill a man over a two-day deduction? Do you think I lost my mind to spend my old age behind bars?!"
              },
              "sympathetic": {
                "ar": "الحزن كان يملأ قلبي أحياناً من قسوته، لكن القتل جريمة كبرى لا يقدم عليها مؤمن يخاف حسابه.",
                "en": "Grief filled my heart at times from his severity, but murder is a grave sin no believer would ever commit."
              }
            }
          },
          {
            "id": "q_s4_witness",
            "category": "witness",
            "text": {
              "ar": "من هو آخر شخص شاهدته يغادر مبنى المطعم ذلك المساء؟",
              "en": "Who was the last person you witnessed exiting the restaurant building that evening?"
            },
            "responses": {
              "calm": {
                "ar": "رأيت الشيف ليلى تخرج مسرعة من الباب الخلفي في حوالي العاشرة وخمس وأربعين دقيقة متخفية بمعطف داكن.",
                "en": "I saw chef Layla leaving hastily through the back door around 10:45 PM concealed in a dark coat."
              },
              "pressing": {
                "ar": "ليلى هي الوحيدة التي خرجت متأخرة جداً بعد الجميع! ناديتها فلم تلتفت وأسرعت خطواتها نحو الظلام!",
                "en": "Layla was the only one who left extremely late after everyone! I called her, she didn't turn and dashed into the dark!"
              },
              "sympathetic": {
                "ar": "ليلى بدت في غاية الارتباك والرعب... كانت تمسك حقيبتها بشدة وتهرول كمن يفر من كارثة حلت للتو.",
                "en": "Layla looked utterly shaken and terrified... clutching her bag tightly and rushing like someone fleeing a fresh catastrophe."
              }
            }
          },
          {
            "id": "q_s4_secret",
            "category": "secret",
            "text": {
              "ar": "لماذا لم تنطلق صفارات الإنذار ولم تسجل الكاميرات ممر الطابق العلوي؟",
              "en": "Why didn't the alarm sirens trigger and why didn't cameras record the upper hallway?"
            },
            "responses": {
              "calm": {
                "ar": "هناك أعطال متكررة في اللوحة الرئيسية وسلك التوصيل، وقد أخطرت الإدارة بذلك مسبقاً.",
                "en": "There were recurring faults in the main electrical board and cable, and I notified management in advance."
              },
              "pressing": {
                "ar": "لست مهندس كاميرات! لا تحاول تلفيق الإهمال لي لتبرئة الفاعل الحقيقي!",
                "en": "I am no camera engineer! Do not attempt framing negligence on me to exonerate the real culprit!"
              },
              "sympathetic": {
                "ar": "أرجوك استر عليّ... تناولت مسكناً قوياً لآلام ظهري وغلبني نوم عميق داخل الكابينة ولم أستيقظ إلا على ضجة الصباح! أهملت واجبي دون قصد!",
                "en": "Please protect my secret... I took heavy painkillers for back pain and fell into a deep slumber in the booth until morning noise! I neglected duty unintentionally!"
              }
            }
          },
          {
            "id": "q_s4_badge",
            "category": "evidence",
            "text": {
              "ar": "عثرنا على بطاقة أمنية مكسورة باسمك قرب الخزنة، كيف تفسر ذلك؟",
              "en": "We found a broken security badge bearing your name near the safe, how do you explain that?"
            },
            "responses": {
              "calm": {
                "ar": "فقدت تلك البطاقة القديمة منذ أسبوع تقريباً في المطبخ وطلبت إصدار بطاقة بديلة من نادية.",
                "en": "I lost that old badge about a week ago in the kitchen and requested a replacement from Nadia."
              },
              "pressing": {
                "ar": "أي شخص في المطعم كان يستطيع سرقتها من صندوق الأمانات واستخدامها لإلصاق التهمة بي وتوريطي!",
                "en": "Anyone in the restaurant could have stolen it from the locker to frame me and shift suspicion onto me!"
              },
              "sympathetic": {
                "ar": "أحدهم تعمد إسقاطها هناك ليجعل الشبهة تحوم حولي... أنا لم أصعد لمكتب الضحية منذ شهور طويلة.",
                "en": "Someone deliberately dropped it there to cast suspicion on me... I haven't stepped into the victim's office for months."
              }
            }
          }
        ],
        "presentReactions": {
          "clue_08": {
            "text": {
              "ar": "سامر يتنهد مطولاً ويمسح وجهه: 'بطاقتي المكسورة... نعم، كنت أبحث عنها. كُسرت عندما سقطت قرب الخزنة قبل أسبوع أثناء تفقد الستائر، ولم أبلغ نادية خشية الخصم!'",
              "en": "Samir sighs deeply wiping his face: 'My broken badge... yes, I was searching for it. It broke when I tripped near the safe a week ago inspecting curtains, and I hid it fearing wage deduction!'"
            },
            "unlockQuestion": {
              "id": "q_s4_unlocked_badge",
              "category": "evidence",
              "text": {
                "ar": "هل رأيت الخزنة مفتوحة أو تعرضت للعبث في أي من جولاتك؟",
                "en": "Did you see the safe open or tampered with on any of your rounds?"
              },
              "responses": {
                "calm": {
                  "ar": "كانت مغلقة دائماً خلف الستار، ولم أرَ أحداً يفتحها سوى نادية وكريم في مواعيد الجرد.",
                  "en": "It was always locked behind the curtain, I never saw anyone open it except Nadia and Karim during audits."
                },
                "pressing": {
                  "ar": "أنا حارس أبواب وسياج خارجي ولا أتدخل في شؤون الخزائن! اسألوا من يملك مفاتيحها ورموزها!",
                  "en": "I guard doors and perimeter, I don't interfere with safes! Ask those who hold keys and codes!"
                },
                "sympathetic": {
                  "ar": "الحقيقة أنني شعرت بحركة غير عادية في المكتب ذلك المساء، لكن مرضي وإعيائي منعاني من الصعود للتأكد.",
                  "en": "Truth is I sensed unusual movement in the office that evening, but illness and fatigue kept me from checking."
                }
              }
            }
          }
        }
      }
    ]
  },
  {
    "id": "case_002",
    "killerId": "suspect_m2",
    "sceneId": "museum",
    "motiveOptions": {
      "correctId": "motive_silence",
      "options": [
        {
          "id": "motive_theft",
          "text": {
            "ar": "سرقة اللوحة الأصلية لبيعها في السوق السوداء مقابل ثروة",
            "en": "Stealing the original painting to sell it on the black market for a fortune"
          }
        },
        {
          "id": "motive_silence",
          "text": {
            "ar": "إسكات الحارس فؤاد بعد أن ضبطها تستبدل اللوحة الأصلية بنسخة مزيّفة",
            "en": "Silencing guard Fuad after he caught her swapping the original painting for a forgery"
          }
        },
        {
          "id": "motive_revenge",
          "text": {
            "ar": "انتقام مهني بعد رفض اعتماد أعمال ترميمها وتهديدها بالفصل من المتحف",
            "en": "Professional revenge after her restoration work was rejected and she was threatened with dismissal"
          }
        }
      ]
    },
    "endings": {
      "full": {
        "title": {
          "ar": "اعتراف خلف الإطار",
          "en": "Confession Behind the Frame"
        },
        "text": {
          "ar": "عندما وضعت الأدلة الحاسمة أمام {killer}، حاولت التملّص ببرود، لكن بصمتها على الإطار وأمر العمل الممزق حاصراها. انهارت واعترفت أنها زوّرت نسخة من «الفجر الذهبي» واستبدلتها بالأصل بتحريض من جامع تحف، وأنها حين ضبطها الحارس فؤاد متلبّسة بالتبديل ضربته بطّفاية الحريق حتى سكتت أنفاسه. أُعيدت اللوحة الأصلية إلى إطارها، ودخلت {killer} السجن، ونلت أنت وسام الشرف لإغلاقك أخطر قضية في تاريخ المتحف.",
          "en": "When you laid the crucial evidence before {killer}, she tried to deflect coolly, but her fingerprint on the frame and the torn work order cornered her. She broke down and confessed that she had forged a copy of 'The Golden Dawn' and swapped it for the original at a collector's urging, and that when guard Fuad caught her in the act she struck him with the fire extinguisher until his breath stopped. The original painting returned to its frame, {killer} went to prison, and you earned a medal of honor for closing the museum's most dangerous case."
        }
      },
      "partial": {
        "title": {
          "ar": "قضية تنهار جزئياً",
          "en": "A Case Partially Collapses"
        },
        "text": {
          "ar": "قدّمت اتهامك، لكنك لم تُحكم شبكة الأدلة حول المتهم. بدا الدافع مرتبكاً، وهاجم الدفاع ثغرات التسلسل الزمني حتى اهتزت صورة القاتل أمام المحلفين. أُعيدت القضية للتحقيق وبقيت نجمة واحدة مضاءة في سجلك؛ درس جديد بأن الحقيقة تحتاج أدلة مترابطة لا حدساً عابراً.",
          "en": "You made your accusation, but you did not tighten the net of evidence around the suspect. The motive sounded confused, and the defense attacked the timeline gaps until the killer's image wavered before the jury. The case was sent back for further investigation and a single star remained lit in your record; a new lesson that truth needs coherent evidence, not fleeting intuition."
        }
      },
      "innocent": {
        "title": {
          "ar": "بريء... واللوحة تختفي",
          "en": "Innocent... and the Painting Vanishes"
        },
        "text": {
          "ar": "عندما قرأت الاتهام، نظر إليك {suspect} بذهول ثم انهار. كشف التحقيق سرّه: {secret} — لكنه لم يكن القاتل. وبينما كانت المحكمة تبرّئه، غادرت {killer} البلاد مهرّبةً اللوحة الأصلية، تاركةً خلفها قضية مفتوحة وندماً ثقيلاً يحمله سجلك إلى الأبد.",
          "en": "As you read out the accusation, {suspect} stared at you in disbelief and then broke down. The investigation revealed the secret: {secret} — but it was not the killer. While the court cleared the innocent suspect, {killer} left the country smuggling the original painting, leaving behind an open case and a heavy regret your record will carry forever."
        }
      }
    },
    "title": {
      "ar": "سرقة اللوحة وقتل الحارس",
      "en": "The Stolen Painting and the Guard's Murder"
    },
    "intro": {
      "ar": "في صباح بارد، عُثر على جثة حارس الليل فؤاد العتيبي ممددة على أرض قاعة المعارض الرئيسية في المتحف الوطني، وإلى جواره إطار ذهبي فارغ كان يحمل لوحة «الفجر الذهبي» النادرة. اللوحة اختفت وحلّت مكانها نسخة مزيّفة، ولم يُكسر أي باب. كل شيء يشير إلى أن القاتل سار داخل المتحف كأنه في بيته.",
      "en": "On a cold morning, the body of night guard Fuad Al-Otaibi was found lying on the floor of the main exhibition hall at the National Museum, beside an empty gold frame that had held the rare painting 'The Golden Dawn'. The painting was gone and a forgery had taken its place, yet no door was broken. Everything indicates the killer moved inside the museum as if it were home."
    },
    "victim": {
      "name": {
        "ar": "فؤاد العتيبي",
        "en": "Fuad Al-Otaibi"
      },
      "description": {
        "ar": "حارس أمن ليلي في الثانية والخمسين من عمره، أمين ومتفانٍ، عمل في المتحف خمسة عشر عاماً.",
        "en": "A 52-year-old night security guard, honest and devoted, who worked at the museum for fifteen years."
      },
      "placeOfDeath": {
        "ar": "قاعة المعارض الرئيسية في المتحف الوطني",
        "en": "Main exhibition hall of the National Museum"
      },
      "timeOfDeath": {
        "ar": "بين الحادية عشرة والنصف ليلاً والثانية عشرة والربع بعد منتصف الليل",
        "en": "Between 11:30 PM and 12:15 AM"
      }
    },
    "autopsy": {
      "cause": {
        "ar": "ضربات قوية متكررة بجسم معدني ثقيل على مقدمة الرأس سببت تهشماً في الجمجمة ونزيفاً دماغياً حاداً، مع كدمات على الساعدين تشير إلى مقاومة قصيرة قبل الوفاة.",
        "en": "Repeated heavy blows from a metal object to the front of the head caused a shattered skull and severe brain hemorrhage, with bruises on the forearms indicating a brief struggle before death."
      },
      "deathWindow": {
        "start": "23:30",
        "end": "00:15"
      },
      "findings": [
        {
          "ar": "زاوية الضربات الأمامية تعني أن الضحية كان يواجه المهاجم وجهاً لوجه، وربما حاول الدفاع عن نفسه أو حماية شيء ما.",
          "en": "The frontal angle of the blows means the victim faced the attacker directly, likely trying to defend himself or protect something."
        },
        {
          "ar": "المعدة شبه فارغة وبقايا قهوة، ما يضع الوفاة في نافذة تمتد من الحادية عشرة والنصف ليلاً حتى الثانية عشرة والربع بعد منتصف الليل.",
          "en": "The stomach is nearly empty with coffee residue, placing death in a window from 11:30 PM to 12:15 AM."
        },
        {
          "ar": "آثار مسحوق جبس وصبغة ذهبية دقيقة تحت أظافر الضحية، وهي نفس المادة التي عُثر عليها على الإطار الفارغ، ما يشير إلى تلامسه مع أدوات ترميم اللوحة قبل مقتله.",
          "en": "Traces of plaster powder and fine gold pigment under the victim's nails, the same material found on the empty frame, indicating contact with painting restoration tools before his death."
        }
      ]
    },
    "location": {
      "name": {
        "ar": "المتحف الوطني - قاعة المعارض الرئيسية",
        "en": "National Museum - Main Exhibition Hall"
      },
      "description": {
        "ar": "متحف فسيح يضم جناحاً مخصصاً للوحات الكلاسيكية النادرة، محمي بنظام إنذار وكاميرات مراقبة.",
        "en": "A spacious museum with a wing dedicated to rare classical paintings, protected by an alarm system and surveillance cameras."
      }
    },
    "scene": [
      {
        "id": "point_painting",
        "name": {
          "ar": "الإطار الفارغ",
          "en": "Empty Frame"
        },
        "desc": {
          "ar": "الإطار الذهبي الفاخر للوحة «الفجر الذهبي» ما زال معلقاً، لكن اللوحة اختفت وحلّت مكانها نسخة مزيّفة خشنة الملمس.",
          "en": "The ornate gold frame of 'The Golden Dawn' still hangs, but the painting is gone and a rough-textured forgery has replaced it."
        },
        "x": 50,
        "y": 26,
        "clueId": "m01"
      },
      {
        "id": "point_pedestal",
        "name": {
          "ar": "المنصّة الرخامية",
          "en": "Marble Pedestal"
        },
        "desc": {
          "ar": "منصّة رخامية تحت الإطار مباشرة، عليها أثر سائل ورقائق ذهبية متناثرة.",
          "en": "A marble pedestal directly beneath the frame, bearing a fluid stain and scattered gold flakes."
        },
        "x": 50,
        "y": 53,
        "clueId": "m02"
      },
      {
        "id": "point_body",
        "name": {
          "ar": "جثة الحارس",
          "en": "Guard's Body"
        },
        "desc": {
          "ar": "جثة الحارس فؤاد العتيبي ممددة على الأرض قرب المنصّة، والطبيب الشرعي ينتظر الإذن ببدء التشريح.",
          "en": "The body of guard Fuad Al-Otaibi lies on the floor near the pedestal; the medical examiner awaits permission to begin the autopsy."
        },
        "x": 29,
        "y": 75,
        "clueId": "m03"
      },
      {
        "id": "point_extinguisher",
        "name": {
          "ar": "طفاية الحريق",
          "en": "Fire Extinguisher"
        },
        "desc": {
          "ar": "طفاية حريق حمراء معلقة على الجدار قرب مخرج الطوارئ، ومسندها مفكوك قليلاً.",
          "en": "A red fire extinguisher mounted on the wall near the emergency exit, its bracket slightly loose."
        },
        "x": 31,
        "y": 47,
        "clueId": "m04"
      },
      {
        "id": "point_security",
        "name": {
          "ar": "مكتب الأمن",
          "en": "Security Desk"
        },
        "desc": {
          "ar": "مكتب الأمن في مدخل القاعة، تحيط به شاشات مراقبة معطّلة وسجلات وردية.",
          "en": "The security desk at the hall entrance, surrounded by dead monitors and shift logs."
        },
        "x": 16,
        "y": 47,
        "clueId": "m05"
      },
      {
        "id": "point_workbench",
        "name": {
          "ar": "طاولة الترميم",
          "en": "Restoration Workbench"
        },
        "desc": {
          "ar": "طاولة الترميم الخاصة بالمرمّمين، مغطاة بفرش دقيقة ومواد ترميم وزجاجات مذيبات.",
          "en": "The restorers' workbench, covered with fine brushes, restoration compounds and solvent bottles."
        },
        "x": 82,
        "y": 49,
        "clueId": "m06"
      },
      {
        "id": "point_storage",
        "name": {
          "ar": "خزانة التخزين العالية",
          "en": "Tall Storage Cabinet"
        },
        "desc": {
          "ar": "خزانة معدنية عالية في زاوية القاعة تُحفظ فيها اللوحات وتُقفل بعد كل معرض.",
          "en": "A tall metal cabinet in the corner where paintings are stored and locked after each exhibition."
        },
        "x": 91,
        "y": 32,
        "clueId": "m07",
        "hiddenUntil": {
          "suspectId": "suspect_m2",
          "questionId": "q_m2_secret"
        }
      }
    ],
    "clues": [
      {
        "id": "m01",
        "name": {
          "ar": "بصمة على حافة الإطار",
          "en": "Fingerprint on the Frame Edge"
        },
        "desc": {
          "ar": "بصمة إصبع جزئية على الحافة الداخلية للإطار الذهبي، فوق طبقة الجبس مباشرة.",
          "en": "A partial fingerprint on the inner edge of the gold frame, directly over the plaster layer."
        },
        "type": "fingerprint",
        "importance": "crucial",
        "suspectIds": [
          "suspect_m2"
        ],
        "labSuspectIds": [
          "suspect_m2"
        ],
        "analyzable": true,
        "labType": "fingerprint",
        "labSeed": 9137,
        "certainty": "high",
        "labResult": {
          "ar": "البصمة على الإطار مطابقة تماماً لبصمة ريم الجابري، وهي نقطة لا يلمسها إلا من يفكّ اللوحة ويستبدلها. المادة الجبسية تحت البصمة هي نفسها المستخدمة في النسخة المزيّفة.",
          "en": "The frame print is an exact match to Reem Al-Jabri's fingerprint, a spot only someone removing and swapping the painting would touch. The plaster under the print is the same used in the forgery."
        },
        "labResultMedium": {
          "ar": "أظهرت المطابقة السريعة تشابهاً جزئياً مع بصمة ريم الجابري، لكن جودة الطبعة على الإطار تمنع الجزم؛ يُنصح بإعادة المطابقة.",
          "en": "A quick comparison showed a partial similarity to Reem Al-Jabri's print, but print quality on the frame prevents certainty; re-matching is advised."
        },
        "recoveredClue": {
          "id": "m08",
          "name": {
            "ar": "تقرير مطابقة البصمة",
            "en": "Fingerprint Match Report"
          },
          "desc": {
            "ar": "تقرير مخبري يؤكد أن البصمة على الإطار مطابقة لسجل بصمات ريم الجابري في قاعدة بيانات العاملين بالمتحف.",
            "en": "A lab report confirming the frame fingerprint matches Reem Al-Jabri's record in the museum staff database."
          },
          "type": "document",
          "importance": "crucial",
          "suspectIds": [
            "suspect_m2"
          ]
        }
      },
      {
        "id": "m02",
        "name": {
          "ar": "قفاز المرمّم الملطّخ",
          "en": "Stained Restorer's Glove"
        },
        "desc": {
          "ar": "قفاز قطني مهترئ سقط خلف المنصّة، ملطّخ بصبغة ذهبية ومادة مذيبة للورنيش.",
          "en": "A frayed cotton glove dropped behind the pedestal, stained with gold pigment and varnish solvent."
        },
        "type": "trace",
        "importance": "crucial",
        "suspectIds": [
          "suspect_m2"
        ],
        "analyzable": true,
        "labType": "trace",
        "certainty": "high",
        "labResult": {
          "ar": "ألياف القفاز تحتوي على مزيج مذيبات لا يستخدمه إلا المرمّمون، وبداخله أثر صبغة ذهبية مطابقة للوحة الأصلية. القفاز ضيّق المقاس ويتناسب مع يد أنثوية صغيرة.",
          "en": "The glove fibers contain a solvent blend only restorers use, with gold pigment matching the original painting inside. The glove is small-sized and fits a petite female hand."
        }
      },
      {
        "id": "m03",
        "name": {
          "ar": "أثر حذاء فاخر",
          "en": "Luxury Shoe Print"
        },
        "desc": {
          "ar": "بصمة حذاء جلدي أنيق بمقاس صغير ونقشة نادرة على أرضية الرخام قرب جثة الحارس.",
          "en": "A print of an elegant leather shoe, small-sized with a rare sole pattern, on the marble floor near the guard's body."
        },
        "type": "trace",
        "importance": "misleading",
        "suspectIds": [
          "suspect_m4"
        ],
        "analyzable": true,
        "labType": "trace",
        "certainty": "medium",
        "misleading": true,
        "labResult": {
          "ar": "الحذاء من ماركة محدودة الإصدار يرتديها سيف العبدلي، لكن الأثر يعود لزيارته النهارية للمتحف قبل ساعات من الجريمة، لا لليلة الحادث.",
          "en": "The shoe is a limited-edition brand worn by Saif Al-Abdali, but the print belongs to his daytime museum visit hours before the crime, not the night of the incident."
        }
      },
      {
        "id": "m04",
        "name": {
          "ar": "سجل وردية الحراسة",
          "en": "Night Shift Log"
        },
        "desc": {
          "ar": "سجل الوردية الليلية سقط قرب طفاية الحريق، تُسجَّل فيه أسماء من دخلوا القاعة بعد إغلاقها.",
          "en": "The night shift log, knocked to the floor near the fire extinguisher, records who entered the hall after closing."
        },
        "type": "document",
        "importance": "important",
        "suspectIds": [
          "suspect_m1",
          "suspect_m3",
          "suspect_m4"
        ]
      },
      {
        "id": "m05",
        "name": {
          "ar": "سجل الكاميرات الممسوح",
          "en": "Wiped Camera Log"
        },
        "desc": {
          "ar": "ملف تسجيل كاميرات تلك الليلة فارغ، وقد حُذفت آخر أربعون دقيقة منه عن بُعد من جهاز مكتب الأمن.",
          "en": "The camera recording file for that night is empty; its last forty minutes were remotely deleted from the security desk terminal."
        },
        "type": "document",
        "importance": "misleading",
        "suspectIds": [
          "suspect_m3"
        ],
        "analyzable": true,
        "labType": "document",
        "certainty": "medium",
        "misleading": true,
        "paperText": {
          "ar": "سجل استعادة البيانات — كاميرا القاعة 2. الفترة المحذوفة: 22:10–22:50. نوع العملية: حذف عن بُعد. محطة التنفيذ: مكتب الأمن. معرّف الحساب: ADM-02. بصمة حساب الحارس: غير موجودة.",
          "en": "Data Recovery Log — Gallery Camera 2. Deleted interval: 10:10–10:50 PM. Operation: remote deletion. Origin terminal: security desk. Account ID: ADM-02. Guard account fingerprint: absent."
        },
        "labResult": {
          "ar": "الحذف تم بحساب مدير النظام الخاص بأمين المتحف، وليس بحساب الحارس، ما يجعل الاتهام الأولي للحارس أثراً مضللاً.",
          "en": "The deletion was made with the system administrator account belonging to the museum curator, not the guard's account, making the initial suspicion of the guard a misleading trace."
        }
      },
      {
        "id": "m06",
        "name": {
          "ar": "ورقة ممزقة بجانب الطاولة",
          "en": "Torn Paper beside the Bench"
        },
        "desc": {
          "ar": "قصاصات ورقية ممزقة متناثرة تحت طاولة الترميم، يبدو أنها أمر عمل واحد.",
          "en": "Torn paper scraps scattered under the restoration workbench, apparently a single work order."
        },
        "type": "torn_paper",
        "importance": "crucial",
        "suspectIds": [
          "suspect_m2"
        ],
        "analyzable": true,
        "labType": "document",
        "labSeed": 4271,
        "certainty": "high",
        "paperText": {
          "ar": "أمر عمل: استبدال لوحة «الفجر الذهبي» بنسخة مطابقة قبل فتح المعرض. الدفع نقداً، ولا تُخبَر إدارة المتحف. — س.ع",
          "en": "Work order: Replace 'The Golden Dawn' with an identical copy before the exhibition opens. Payment in cash, and museum management is not to be informed. — S.A"
        },
        "labResult": {
          "ar": "أُعيد تجميع الورقة: أمر عمل من جامع تحف خاص يطلب استبدال اللوحة الأصلية بنسخة مزيّفة مقابل مبلغ ضخم. خط اليد ليس خط المرمّمة، لكنها الوسيط الوحيد القادر على تنفيذ التبديل دون إثارة الشك. الورقة مُزّقت حديثاً ليلة الجريمة.",
          "en": "The paper is reassembled: a work order from a private art collector requesting the original painting be swapped for a forgery for a huge sum. The handwriting is not the restorer's, but she is the only intermediary able to perform the swap without raising suspicion. The paper was torn recently, on the night of the murder."
        },
        "recoveredClue": {
          "id": "m06_full",
          "name": {
            "ar": "أمر العمل كاملاً",
            "en": "Complete Work Order"
          },
          "desc": {
            "ar": "أمر عمل موقّع بالأحرف «س.ع» يطلب استبدال لوحة «الفجر الذهبي» بنسخة مطابقة قبل فتح المعرض، مع دفع نقدي وتحذير من إخبار إدارة المتحف.",
            "en": "A work order signed with the initials 'S.A' requesting 'The Golden Dawn' be swapped for an identical copy before the exhibition opens, with cash payment and a warning not to inform museum management."
          },
          "type": "message",
          "importance": "crucial",
          "suspectIds": [
            "suspect_m2"
          ]
        }
      },
      {
        "id": "m07",
        "name": {
          "ar": "اللوحة الأصلية المخبأة",
          "en": "Hidden Original Painting"
        },
        "desc": {
          "ar": "اللوحة الأصلية «الفجر الذهبي» مطوية داخل غلاف واقٍ في أسفل خزانة التخزين، في انتظار تهريبها.",
          "en": "The original 'Golden Dawn' painting, wrapped in a protective sleeve at the bottom of the storage cabinet, awaiting smuggling."
        },
        "type": "personal",
        "importance": "crucial",
        "suspectIds": [
          "suspect_m2"
        ]
      },
      {
        "id": "m08",
        "name": {
          "ar": "تقرير مطابقة البصمة",
          "en": "Fingerprint Match Report"
        },
        "desc": {
          "ar": "تقرير مخبري يؤكد أن البصمة على الإطار مطابقة لسجل بصمات ريم الجابري في قاعدة بيانات العاملين بالمتحف.",
          "en": "A lab report confirming the frame fingerprint matches Reem Al-Jabri's record in the museum staff database."
        },
        "type": "document",
        "importance": "crucial",
        "suspectIds": [
          "suspect_m2"
        ]
      }
    ],
    "suspects": [
      {
        "id": "suspect_m1",
        "name": {
          "ar": "خالد المنصوري",
          "en": "Khalid Al-Mansouri"
        },
        "age": 49,
        "job": {
          "ar": "أمين المتحف",
          "en": "Museum Curator"
        },
        "relation": {
          "ar": "المسؤول عن تنظيم المعارض وإدارة مقتنيات المتحف",
          "en": "Responsible for organizing exhibitions and managing the museum's holdings"
        },
        "alibiWindow": {
          "start": "22:30",
          "end": "23:15"
        },
        "personality": "arrogant",
        "personalityDesc": {
          "ar": "رجل مثقف متعالٍ يعتز بمكانته وسمعته، ويرفض أن يوجَّه إليه أي اتهام.",
          "en": "A cultured, condescending man proud of his status and reputation, refusing any accusation."
        },
        "secret": {
          "ar": "كان يتفاوض سراً على بيع اللوحة لمشترٍ خاص مقابل مبلغ ضخم، وعطّل جزءاً من نظام الإنذار لترتيب «معاينة خاصة» ليلة الحادث.",
          "en": "He was secretly negotiating to sell the painting to a private buyer for a huge sum and disabled part of the alarm system to arrange a 'private viewing' that night."
        },
        "questions": [
          {
            "id": "q_m1_alibi",
            "category": "alibi",
            "text": {
              "ar": "أين كنت ليلة الجريمة بين الحادية عشرة والنصف ومنتصف الليل؟",
              "en": "Where were you on the night of the crime between 11:30 PM and midnight?"
            },
            "responses": {
              "calm": {
                "ar": "كنت في مكتبي الإداري أُنهي مراسلات المعرض القادم حتى الحادية عشرة والربع، ثم عدت إلى منزلي مباشرة.",
                "en": "I was in my administrative office finishing the upcoming exhibition's correspondence until 11:15 PM, then went straight home."
              },
              "pressing": {
                "ar": "هل تجرؤ على استجوابي كمتهم؟! أنا أمين هذا المتحف وسمعتي فوق كل شبهة، ووقتي أثمن من أن أضيّعه في تبريرات!",
                "en": "Do you dare question me like a defendant?! I am this museum's curator, my reputation is above any suspicion, and my time is too valuable to waste on justifications!"
              },
              "sympathetic": {
                "ar": "أتفهم أنك تؤدي عملك، لكنني رجل منهك ينهي معرضاً ضخماً... لم أعد أذكر تفاصيل كل دقيقة في تلك الليلة.",
                "en": "I understand you are doing your job, but I am an exhausted man finishing a huge exhibition... I no longer recall every minute of that night."
              }
            }
          },
          {
            "id": "q_m1_relation",
            "category": "relation",
            "text": {
              "ar": "كيف كانت علاقتك بالحارس القتيل فؤاد العتيبي؟",
              "en": "What was your relationship with the murdered guard Fuad Al-Otaibi?"
            },
            "responses": {
              "calm": {
                "ar": "علاقة عمل عادية مع حارس قدير، لم تجمعنا خلافات تُذكر سوى ملاحظات روتينية عن جدول الحراسة.",
                "en": "An ordinary working relationship with a respected guard; we had no notable disputes beyond routine notes on the shift schedule."
              },
              "pressing": {
                "ar": "أنا لا أختلط بالحرّاس أصلاً! فؤاد كان يؤدي واجبه وأنا أدير المتحف، ولا يوجد أي شأن شخصي بيننا!",
                "en": "I do not mingle with guards at all! Fuad did his duty and I ran the museum; there is no personal matter between us!"
              },
              "sympathetic": {
                "ar": "فؤاد كان رجلاً مخلصاً خدم هنا خمسة عشر عاماً، وأنا آسف لفقده... لكنه كان يبالغ أحياناً في تشدده بالإجراءات.",
                "en": "Fuad was a loyal man who served here fifteen years, and I grieve his loss... though he sometimes exaggerated his strictness with procedures."
              }
            }
          },
          {
            "id": "q_m1_motive",
            "category": "motive",
            "text": {
              "ar": "ما حقيقة التفاوض السري على بيع لوحة «الفجر الذهبي» لمشترٍ خاص؟",
              "en": "What is the truth about the secret negotiation to sell 'The Golden Dawn' to a private buyer?"
            },
            "responses": {
              "calm": {
                "ar": "مجرد عرض شراء رسمي مرّ عبر القنوات المعتادة ورفضته اللجنة حفاظاً على التراث؛ لا شيء سري في الأمر.",
                "en": "Merely a formal purchase offer that went through the usual channels and was rejected by the committee to preserve heritage; nothing secret about it."
              },
              "pressing": {
                "ar": "من أين لك هذه الادعاءات السخيفة؟! أنا حامي هذا التراث لا بائعه، ولن أسمح بوصمي بجشع رخيص!",
                "en": "Where did you get these ridiculous claims?! I am the protector of this heritage, not its seller, and I will not be branded with cheap greed!"
              },
              "sympathetic": {
                "ar": "بيننا وبين أنفسنا... كان الرقم مغرياً لتمويل ترميم الجناح كاملاً، لكنني لم أوقّع شيئاً ولم أتجاوز القانون.",
                "en": "Between us... the figure was tempting to fund renovating the entire wing, but I signed nothing and broke no law."
              }
            }
          },
          {
            "id": "q_m1_witness",
            "category": "witness",
            "text": {
              "ar": "من رأيته في القاعة بعد إغلاق المتحف تلك الليلة؟",
              "en": "Whom did you see in the hall after the museum closed that night?"
            },
            "responses": {
              "calm": {
                "ar": "رأيت المرمّمة ريم الجابري تبقى متأخرة بحجة إنهاء ترميم إطار، وكان ذلك أمراً معتاداً منها.",
                "en": "I saw restorer Reem Al-Jabri staying late under the pretext of finishing a frame restoration, which was usual for her."
              },
              "pressing": {
                "ar": "إن كنت تبحث عن مجرم فانظر إلى من لا ينبغي أن يكون هنا بعد الإغلاق! ريم كانت تتسكع قرب اللوحة في وقت متأخر!",
                "en": "If you seek a criminal, look at whoever should not be here after closing! Reem was lingering near the painting late at night!"
              },
              "sympathetic": {
                "ar": "رأيت ريم تعمل وحدها في ضوء خافت قرب الإطار، وبدت متوترة أكثر من المعتاد... تمنيت لو سألتها ما بها.",
                "en": "I saw Reem working alone in dim light near the frame, and she seemed more nervous than usual... I wish I had asked her what was wrong."
              }
            }
          },
          {
            "id": "q_m1_secret",
            "category": "secret",
            "text": {
              "ar": "لماذا عُطّل جزء من نظام الإنذار في ليلة الحادث؟",
              "en": "Why was part of the alarm system disabled on the night of the incident?"
            },
            "responses": {
              "calm": {
                "ar": "كان هناك صيانة دورية مجدولة للوحة الكهربائية، وقد صرّحتُ بها رسمياً في سجل الإدارة.",
                "en": "There was scheduled periodic maintenance on the electrical panel, which I officially authorized in the management log."
              },
              "pressing": {
                "ar": "هذا شأن إداري داخلي ولا يخصك! لا تحوّل إجراءً تنظيمياً روتينياً إلى تهمة ضدي!",
                "en": "That is an internal administrative matter that does not concern you! Do not turn a routine organizational measure into an accusation against me!"
              },
              "sympathetic": {
                "ar": "كنت أرتّب «معاينة خاصة» لعميل مهم خارج ساعات العمل... تجاوزتُ البروتوكول قليلاً، وأنا أدرك أن ذلك كان خطأً فادحاً.",
                "en": "I was arranging a 'private viewing' for an important client outside working hours... I bent the protocol a little, and I realize that was a grave mistake."
              }
            }
          },
          {
            "id": "q_m1_alarm",
            "category": "evidence",
            "text": {
              "ar": "عثرنا على سجل زياراتك المتأخرة للمتحف، ماذا كنت تفعل هناك ليلاً؟",
              "en": "We found records of your late visits to the museum; what were you doing there at night?"
            },
            "responses": {
              "calm": {
                "ar": "أراجع الإضاءة وأنظمة العرض بعد إغلاق القاعات، وهذا جزء من مسؤولياتي الإدارية.",
                "en": "I review lighting and display systems after the halls close, which is part of my administrative duties."
              },
              "pressing": {
                "ar": "أنا أمين المتحف! من حقّي دخول أي قاعة في أي وقت، ولا يحق لك محاسبتي على عملي!",
                "en": "I am the museum curator! I have the right to enter any hall at any time, and you have no right to question my work!"
              },
              "sympathetic": {
                "ar": "كنت أستعد للمعرض الكبير وأعمل ليلاً لتفادي ضغط النهار... لم أكن أخفي شيئاً سوى إرهاقي.",
                "en": "I was preparing for the grand exhibition and worked at night to avoid daytime pressure... I was hiding nothing but my exhaustion."
              }
            }
          }
        ],
        "presentReactions": {
          "m04": {
            "text": {
              "ar": "يتجمّد خالد لحظة ثم يرفع حاجبيه ببرود: «سجل الوردية؟ نعم، وقّعتُ عليه بصفتي المسؤول. وجود اسمي فيه لا يعني أنني كنت أتجول في القاعة ساعة الجريمة، بل أنني أمين على كل ما يجري هنا.»",
              "en": "Khalid freezes for a moment then raises an eyebrow coolly: 'The shift log? Yes, I signed it as the official in charge. My name appearing there doesn't mean I was roaming the hall at the time of the murder, but that I am responsible for everything that happens here.'"
            },
            "unlockQuestion": {
              "id": "q_m1_unlocked_log",
              "category": "evidence",
              "text": {
                "ar": "هل دخلت القاعة الرئيسية بنفسك ليلة الحادث بعد إغلاقها؟",
                "en": "Did you enter the main hall yourself on the night of the incident after it closed?"
              },
              "responses": {
                "calm": {
                  "ar": "دخلت مرتين لتفقد الإضاءة، ولم أتجاوز المنصّة الرخامية إلى حيث وُجدت الجثة.",
                  "en": "I entered twice to check the lighting, and never went past the marble pedestal to where the body was found."
                },
                "pressing": {
                  "ar": "لا يحق لك أن تتبع خطواتي في متحفي! دخولي وخروجي مسجّل ولا يحتاج إذناً منك!",
                  "en": "You have no right to track my steps in my own museum! My comings and goings are logged and need no permission from you!"
                },
                "sympathetic": {
                  "ar": "مررت سريعاً قرب الإطار لأطمئن أن الترميم يسير... رأيت الظلام يلفّ القاعة ولم ألحظ شيئاً مريباً، وهذا يؤلمني الآن.",
                  "en": "I passed quickly near the frame to make sure the restoration was progressing... the hall was wrapped in darkness and I noticed nothing suspicious, which pains me now."
                }
              }
            }
          }
        }
      },
      {
        "id": "suspect_m2",
        "name": {
          "ar": "ريم الجابري",
          "en": "Reem Al-Jabri"
        },
        "age": 34,
        "job": {
          "ar": "مرمّمة لوحات",
          "en": "Painting Restorer"
        },
        "relation": {
          "ar": "تعمل على ترميم اللوحات النادرة في جناح المعارض",
          "en": "Restores rare paintings in the exhibition wing"
        },
        "alibiWindow": {
          "start": "23:20",
          "end": "00:00"
        },
        "personality": "evasive",
        "personalityDesc": {
          "ar": "امرأة ذكية ومتحفظة، تُجيب باقتضاب وتناور في حديثها لتبدو مطمئنة.",
          "en": "A clever, reserved woman who answers tersely and maneuvers in her speech to appear calm."
        },
        "secret": {
          "ar": "زوّرت نسخة من لوحة «الفجر الذهبي» واستبدلتها بالأصل لصالح جامع تحف خاص، وقتلت الحارس فؤاد حين ضبطها متلبّسة بالتبديل.",
          "en": "She forged a copy of 'The Golden Dawn' and swapped it for the original for a private collector, killing guard Fuad when he caught her in the act."
        },
        "questions": [
          {
            "id": "q_m2_alibi",
            "category": "alibi",
            "text": {
              "ar": "أين كنتِ بين الحادية عشرة والنصف ومنتصف الليل ليلة الجريمة؟",
              "en": "Where were you between 11:30 PM and midnight on the night of the crime?"
            },
            "responses": {
              "calm": {
                "ar": "كنت... في غرفة الترميم أنهي تفاصيل عمل على إطار، ثم غادرت بهدوء. لا شيء غير ذلك.",
                "en": "I was... in the restoration room finishing details of work on a frame, then left quietly. Nothing else."
              },
              "pressing": {
                "ar": "أنا لا أحفظ الدقائق! عملت ثم خرجت! لماذا تلاحقونني وكأنني المجرمة الوحيدة في هذا المكان؟!",
                "en": "I don't memorize minutes! I worked then left! Why do you chase me as if I were the only criminal here?!"
              },
              "sympathetic": {
                "ar": "كانت ليلة هادئة وطويلة... أحب العمل ليلاً حين يسكن المتحف. لم أرَ أحداً ولم يحدث شيء يذكر، حقاً.",
                "en": "It was a quiet, long night... I love working at night when the museum is still. I saw no one and nothing worth mentioning happened, truly."
              }
            }
          },
          {
            "id": "q_m2_relation",
            "category": "relation",
            "text": {
              "ar": "كيف كانت علاقتك بالحارس فؤاد العتيبي؟",
              "en": "What was your relationship with guard Fuad Al-Otaibi?"
            },
            "responses": {
              "calm": {
                "ar": "علاقة مهنية محدودة، كان يمرّ عليّ في جولاته ويسأل عن تقدّم الترميم فقط.",
                "en": "A limited professional relationship; he would pass by on his rounds and ask only about the restoration's progress."
              },
              "pressing": {
                "ar": "لا أرى لماذا يهمك هذا! علاقتنا كانت عادية تماماً، ولم يكن بيننا ما يستحق هذا الاستجواب!",
                "en": "I don't see why this matters to you! Our relationship was perfectly ordinary, nothing between us warrants this interrogation!"
              },
              "sympathetic": {
                "ar": "كان رجلاً طيباً... يطمئن عليّ حين أتأخر في العمل. لا أصدق أنه مات بهذه الطريقة، وأنا... لا أريد الحديث عن ذلك.",
                "en": "He was a kind man... he would check on me when I worked late. I can't believe he died this way, and I... don't want to talk about it."
              }
            }
          },
          {
            "id": "q_m2_motive",
            "category": "motive",
            "text": {
              "ar": "هل صحيح أنك كنتِ تواجهين ضغطاً بسبب رفض اعتماد أعمال ترميمك؟",
              "en": "Is it true you faced pressure over the rejection of your restoration work?"
            },
            "responses": {
              "calm": {
                "ar": "خلافات فنية بحتة حول أسلوب الترميم، أمر يحدث في كل متحف ولا يستحق أكثر من نقاش مهني.",
                "en": "Purely artistic disagreements about restoration style, something that happens in every museum and warrants no more than a professional discussion."
              },
              "pressing": {
                "ar": "من قال لك ذلك؟! عملي معتمد ومعترف به! لا تحاول تصويري كفاشلة تحقد على الجميع!",
                "en": "Who told you that?! My work is approved and recognized! Do not try to paint me as a failure resenting everyone!"
              },
              "sympathetic": {
                "ar": "أجل، جرحني أن يُرفض عمري كله في لحظة... لكن الفن يعلّمني الصبر، ولم أفكر يوماً في إيذاء أحد.",
                "en": "Yes, it hurt that my life's work was dismissed in a moment... but art teaches me patience, and I never thought of harming anyone."
              }
            }
          },
          {
            "id": "q_m2_witness",
            "category": "witness",
            "text": {
              "ar": "هل رأيتِ شيئاً غير معتاد في القاعة تلك الليلة؟",
              "en": "Did you see anything unusual in the hall that night?"
            },
            "responses": {
              "calm": {
                "ar": "رأيت طارق الحارس الثاني يمرّ مسرعاً نحو البوابة الجانبية في وقت أبكر من المعتاد.",
                "en": "I saw Tariq, the second guard, hurrying toward the side gate earlier than usual."
              },
              "pressing": {
                "ar": "رأيت ظلالاً كثيرة في هذا المتحف! وربما أنت نفسك من يجب أن يشرح أين كان! اتركني وشأني!",
                "en": "I saw many shadows in this museum! And perhaps you yourself should explain where you were! Leave me alone!"
              },
              "sympathetic": {
                "ar": "سمعت خطوات ثقيلة وقعقعة معدنية قرب الإطار... ثم صار كل شيء صامتاً بشكل مخيف. لم أجرؤ على النظر.",
                "en": "I heard heavy footsteps and a metallic clatter near the frame... then everything went frighteningly silent. I did not dare look."
              }
            }
          },
          {
            "id": "q_m2_secret",
            "category": "secret",
            "text": {
              "ar": "ما سرّ التناقض في وثائق ترميم لوحة «الفجر الذهبي» وتاريخ آخر صيانة لها؟",
              "en": "What is the secret behind the discrepancy in 'The Golden Dawn' restoration documents and its last maintenance date?"
            },
            "responses": {
              "calm": {
                "ar": "ربما خطأ في التسجيل... الوثائق كثيرة وأنا الوحيدة التي تتعامل معها، قد أكون أخطأت في تاريخ قديم.",
                "en": "Perhaps a recording error... there are many documents and I am the only one handling them, I may have misdated an old entry."
              },
              "pressing": {
                "ar": "توقّف عن نبش أوراقي! هذه وثائق فنية دقيقة لا يفهمها إلا المرمّمون، واتهامي بالكذب فيها إهانة لمهنتي!",
                "en": "Stop digging through my papers! These are precise technical documents only restorers understand, and accusing me of lying in them insults my profession!"
              },
              "sympathetic": {
                "ar": "حسناً... سأكون صادقة معك. لم يكن هناك ترميم حقيقي لتلك اللوحة. كنت أستبدلها بنسخة، وأحدهم طلب مني ذلك... وأنا خائفة الآن.",
                "en": "Fine... I will be honest with you. There was no real restoration of that painting. I was swapping it for a copy, someone asked me to... and I am afraid now."
              }
            }
          },
          {
            "id": "q_m2_work",
            "category": "evidence",
            "text": {
              "ar": "عثرنا على آثار مذيبات ورقائق ذهبية في غرفة الترميم، كيف تفسّرين ذلك؟",
              "en": "We found traces of solvents and gold flakes in the restoration room; how do you explain that?"
            },
            "responses": {
              "calm": {
                "ar": "أنا مرمّمة، وهذا طبيعي جداً في مكان عملي؛ فرشاي وأصباغي وموادي كلها تحتوي على ذلك.",
                "en": "I am a restorer; this is perfectly natural in my workplace; my brushes, pigments and materials all contain that."
              },
              "pressing": {
                "ar": "هل ستتهمني لأنني أعمل بمهنتي؟! هذه المواد تُستخدم في كل المتحف وليس في طاولتي فقط!",
                "en": "Will you accuse me because I do my job?! These materials are used throughout the museum, not only at my bench!"
              },
              "sympathetic": {
                "ar": "أعلم كيف يبدو ذلك... لكن تلك الرقائق نتجت عن عملي اليومي، وأنا لم أقصد أن أبدو مريبة، صدقني.",
                "en": "I know how that looks... but those flakes came from my daily work, and I never meant to look suspicious, believe me."
              }
            }
          }
        ],
        "presentReactions": {
          "m01": {
            "text": {
              "ar": "ترتجف يد ريم على الطاولة: «بصمة... على الإطار؟ هذا... لا، لماذا أترك بصمتي على إطار مزيّف؟ أعني... على أي إطار؟ أنا ألمس إطارات كثيرة في عملي، هذا لا يعني شيئاً.»",
              "en": "Reem's hand trembles on the table: 'A fingerprint... on the frame? That's... no, why would I leave my print on a forged frame? I mean... on any frame? I touch many frames in my work, this means nothing.'"
            },
            "unlockQuestion": {
              "id": "q_m2_unlocked_frame",
              "category": "evidence",
              "text": {
                "ar": "لماذا وُجدت بصمتك على الحافة الداخلية للإطار تحديداً، وهي نقطة لا يلمسها إلا من يفكّ اللوحة؟",
                "en": "Why was your fingerprint found on the inner edge of the frame specifically, a spot only someone removing the painting would touch?"
              },
              "responses": {
                "calm": {
                  "ar": "الحافة الداخلية... لعلها بقيت من ترميم سابق، الطبقات تتشابه ويصعب أن أتذكر كل لمسة.",
                  "en": "The inner edge... perhaps it remained from a previous restoration; layers are similar and it's hard to recall every touch."
                },
                "pressing": {
                  "ar": "هل تعلم كم لوحة ألمس في اليوم؟! بصمة واحدة لا تصنع مجرماً، هذا جنون!",
                  "en": "Do you know how many paintings I touch in a day?! One print doesn't make a criminal, this is madness!"
                },
                "sympathetic": {
                  "ar": "حسناً... لمست الإطار تلك الليلة. كنت أتفقد الحافة بعد أن لاحظت أن اللوحة تبدو غريبة... هذا كل ما في الأمر، أقسم.",
                  "en": "Fine... I touched the frame that night. I was checking the edge after noticing the painting looked odd... that is all, I swear."
                }
              }
            }
          },
          "m02": {
            "text": {
              "ar": "تحدق ريم في القفاز الملطّخ وتبتلع ريقها: «قفاز... نعم، أفقدت واحداً أثناء العمل. رقائق الذهب؟ كل مرمّم يلوّث قفازه، هذا ليس دليلاً على شيء.»",
              "en": "Reem stares at the stained glove and swallows hard: 'A glove... yes, I lost one while working. Gold flakes? Every restorer stains their glove, that proves nothing.'"
            }
          },
          "m06": {
            "text": {
              "ar": "تقرأ ريم الورقة الملصقة ويجفّ ريقها: «أمر... أمر عمل؟ لا، هذه ليست ورقتي. أحدهم... أحدهم يريد توريطي. لا أعرف من كتبها، حقاً!»",
              "en": "Reem reads the reassembled note and her mouth goes dry: 'A work... a work order? No, this is not my paper. Someone... someone wants to frame me. I don't know who wrote it, truly!'"
            },
            "unlockQuestion": {
              "id": "q_m2_unlocked_order",
              "category": "motive",
              "text": {
                "ar": "من كلّفك باستبدال اللوحة الأصلية بنسخة مطابقة؟",
                "en": "Who commissioned you to swap the original painting for an identical copy?"
              },
              "responses": {
                "calm": {
                  "ar": "لا أفهم ما الذي تتحدث عنه... قد تكون ورقة قديمة من مورد مواد، لا أتذكر.",
                  "en": "I don't understand what you are talking about... it could be an old paper from a materials supplier, I don't recall."
                },
                "pressing": {
                  "ar": "أقسم أنني لم أرَ هذه الورقة من قبل! إن كنتم تجمعون قصاصات لتلفيق تهمة لي فابحثوا عن دليل حقيقي!",
                  "en": "I swear I have never seen this paper! If you are gathering scraps to fabricate a charge, go find real evidence!"
                },
                "sympathetic": {
                  "ar": "كان المبلغ كبيراً... وأنا مديونة منذ مرض أمي. لم أقصد أن يموت أحد، أقسم! أردت فقط أن أُخرج نفسي من الضيق!",
                  "en": "The sum was huge... and I have been in debt since my mother's illness. I never meant for anyone to die, I swear! I only wanted to get myself out of hardship!"
                }
              }
            }
          },
          "m07": {
            "text": {
              "ar": "ينقطع نفس ريم تماماً عند رؤية اللوحة الأصلية: «اللوحة... كيف... كانت مخبأة بإحكام! لا أحد كان يعلم بمكانها سواي!» ثم تصمت ووجهها شاحب كالجبس.",
              "en": "Reem's breath catches completely at the sight of the original painting: 'The painting... how... it was tightly hidden! No one knew its location but me!' Then she falls silent, her face pale as plaster."
            },
            "unlockQuestion": {
              "id": "q_m2_unlocked_painting",
              "category": "secret",
              "text": {
                "ar": "لماذا خبّأتِ اللوحة الأصلية بدل تهريبها فوراً؟",
                "en": "Why did you hide the original painting instead of smuggling it out immediately?"
              },
              "responses": {
                "calm": {
                  "ar": "أنا لم أخبّئ شيئاً... من وضعها هناك يحاول إلصاق التهمة بي، أليس واضحاً؟",
                  "en": "I hid nothing... whoever placed it there is trying to pin this on me, isn't it obvious?"
                },
                "pressing": {
                  "ar": "لا يحق لكم فتح خزانتي! هذه مساحة عمل خاصة، وكل ما فيها يخص الترميم لا الجريمة!",
                  "en": "You have no right to open my cabinet! This is a private workspace, and everything in it concerns restoration, not murder!"
                },
                "sympathetic": {
                  "ar": "كنت خائفة... خططت لتسليمها بعد أن يهدأ كل شيء وأدفع دَيني. لم أرد قتل فؤاد، لكنه رآني... ورأى اللوحة في يدي، فلم أجد وقتاً للتفكير.",
                  "en": "I was afraid... I planned to hand it over once things calmed and I paid my debt. I didn't want to kill Fuad, but he saw me... saw the painting in my hands, and I had no time to think."
                }
              }
            }
          },
          "m08": {
            "text": {
              "ar": "تقرأ ريم تقرير المطابقة فتغمض عينيها طويلاً: «مطابقة تماماً... حسناً. البصمة بصمتي. لكن بصمتي موجودة على كل إطار في هذا الجناح، هذا لا يعني أنني قتلته.»",
              "en": "Reem reads the match report and closes her eyes for a long moment: 'An exact match... fine. The print is mine. But my prints are on every frame in this wing, that doesn't mean I killed him.'"
            }
          }
        }
      },
      {
        "id": "suspect_m3",
        "name": {
          "ar": "طارق الشمري",
          "en": "Tariq Al-Shammari"
        },
        "age": 29,
        "job": {
          "ar": "حارس ليلي ثانٍ",
          "en": "Second Night Guard"
        },
        "relation": {
          "ar": "يعمل مع الضحية في الوردية الليلية نفسها",
          "en": "Works the same night shift as the victim"
        },
        "alibiWindow": {
          "start": "23:45",
          "end": "00:30"
        },
        "personality": "remorseful",
        "personalityDesc": {
          "ar": "شاب طيّب يغلب عليه الشعور بالذنب، يرتجف صوته كلما تحدث عن الحادث.",
          "en": "A kind young man overwhelmed by guilt, his voice trembling whenever he speaks of the incident."
        },
        "secret": {
          "ar": "غادر موقعه مبكراً ليلتقي فتاة في الخارج بعد أن دفع له جامع تحف رشوة ليغضّ النظر، وعاد فوجد الحارس فؤاد مقتولاً فهرب خوفاً.",
          "en": "He left his post early to meet a girl outside after a collector bribed him to look away, and returned to find guard Fuad murdered, fleeing in fear."
        },
        "questions": [
          {
            "id": "q_m3_alibi",
            "category": "alibi",
            "text": {
              "ar": "أين كنت أثناء الوردية الليلية بين الحادية عشرة والنصف ومنتصف الليل؟",
              "en": "Where were you during the night shift between 11:30 PM and midnight?"
            },
            "responses": {
              "calm": {
                "ar": "كنت أتولى جولاتي المعتادة في القاعة الجنوبية، ثم عدت إلى مكتب الأمن.",
                "en": "I was doing my usual rounds in the south hall, then returned to the security desk."
              },
              "pressing": {
                "ar": "كنت... كنت في مكاني! لماذا تصرخ في وجهي؟! لم أقتل أحداً، لماذا لا تصدقني؟!",
                "en": "I was... at my post! Why are you shouting at me?! I killed no one, why won't you believe me?!"
              },
              "sympathetic": {
                "ar": "سأقول الحقيقة... غادرت موقعي لدقائق. خرجت للقاء شخص قرب البوابة، وعدت فوجدت... وجدت فؤاد ملقى على الأرض. لم أعرف ماذا أفعل فهربت.",
                "en": "I will tell the truth... I left my post for a few minutes. I went out to meet someone near the gate, and when I returned I found... found Fuad lying on the ground. I didn't know what to do, so I fled."
              }
            }
          },
          {
            "id": "q_m3_relation",
            "category": "relation",
            "text": {
              "ar": "كيف كانت علاقتك بالحارس فؤاد؟",
              "en": "What was your relationship with guard Fuad?"
            },
            "responses": {
              "calm": {
                "ar": "كان زميلي ومعلّمي، علّمني كل تفاصيل الحراسة، وكنت أحترمه كوالدي.",
                "en": "He was my colleague and mentor; he taught me every detail of guarding, and I respected him like a father."
              },
              "pressing": {
                "ar": "لماذا تسألني هذا؟! فؤاد كان أخاً لي! أنا آخر من يمكن أن يؤذيه، والندم يقتلني أصلاً!",
                "en": "Why do you ask me this?! Fuad was like a brother! I am the last person who could harm him, and guilt is killing me already!"
              },
              "sympathetic": {
                "ar": "أحببته كثيراً... كان يوبّخني بلطف حين أخطئ، وأنا الآن أشعر أنني خذلته حين تركت موقعي.",
                "en": "I loved him dearly... he would reproach me gently when I erred, and now I feel I failed him when I left my post."
              }
            }
          },
          {
            "id": "q_m3_motive",
            "category": "motive",
            "text": {
              "ar": "هل صحيح أن أحدهم دفع لك مالاً لتتغاضى عن مراقبة القاعة؟",
              "en": "Is it true someone paid you money to overlook watching the hall?"
            },
            "responses": {
              "calm": {
                "ar": "لا أعرف عن أي مال تتحدث... أنا حارس بسيط وأؤدي واجبي بأمانة.",
                "en": "I don't know what money you're talking about... I am a simple guard who performs his duty honestly."
              },
              "pressing": {
                "ar": "من قال لك ذلك؟! أنا لم آخذ شيئاً! لماذا يحاول الجميع إلصاق العار بي؟!",
                "en": "Who told you that?! I took nothing! Why is everyone trying to pin shame on me?!"
              },
              "sympathetic": {
                "ar": "أجل... أخذت مبلغاً. رجل غني عرض عليّ مالاً كثيراً مقابل أن أبتعد قليلاً عن القاعة الجنوبية تلك الليلة... كنت غبياً، وأنا أكره نفسي.",
                "en": "Yes... I took money. A wealthy man offered me a lot to step away from the south hall that night... I was foolish, and I hate myself."
              }
            }
          },
          {
            "id": "q_m3_witness",
            "category": "witness",
            "text": {
              "ar": "ماذا رأيت عندما عدت إلى القاعة؟",
              "en": "What did you see when you returned to the hall?"
            },
            "responses": {
              "calm": {
                "ar": "كان الظلام شبه تام، رأيت شيئاً ممدداً على الأرض فاقتربت ووجدت فؤاد... وأسرعت بالخروج خوفاً.",
                "en": "It was nearly pitch dark; I saw something stretched on the floor, approached and found Fuad... and rushed out in fear."
              },
              "pressing": {
                "ar": "رأيت جثة زميلي! هل هذا كافٍ؟! لم أرَ القاتل، كان قد اختفى، ولو رأيته لدللتكم عليه فوراً!",
                "en": "I saw my colleague's body! Is that enough?! I didn't see the killer, he had vanished, and if I had I would have pointed you to him at once!"
              },
              "sympathetic": {
                "ar": "سمعت صوت شيء معدني يسقط... ثم صمت مطبق. حين عدت رأيت ريم تهرول مبتعدة نحو غرفة الترميم، لكنني لم أكن متأكداً... ولم أخبر أحداً من الخوف.",
                "en": "I heard something metal fall... then a heavy silence. When I returned I saw Reem rushing away toward the restoration room, but I wasn't sure... and I told no one out of fear."
              }
            }
          },
          {
            "id": "q_m3_secret",
            "category": "secret",
            "text": {
              "ar": "لماذا تركت موقعك تحديداً في تلك الليلة الحساسة؟",
              "en": "Why did you leave your post on that particularly sensitive night?"
            },
            "responses": {
              "calm": {
                "ar": "خرجت للهواء قليلاً؛ كنت متعباً من وردية طويلة، ولم أتوقع أن يحدث شيء في دقائق.",
                "en": "I stepped out for air briefly; I was tired from a long shift and didn't expect anything to happen in minutes."
              },
              "pressing": {
                "ar": "أخبرتك أنني كنت في موقعي! كفاك تضييقاً عليّ، أنا ضحية مثلكم ولست المجرم!",
                "en": "I told you I was at my post! Stop cornering me, I am a victim like you, not the criminal!"
              },
              "sympathetic": {
                "ar": "كانت فتاة تنتظرني خارج المتحف، وخطيبتي لا تعلم... خرجت لدقائق فقط. ولو بقيت في مكاني لربما أنقذت فؤاداً، وهذا ما يفتّت قلبي.",
                "en": "A girl was waiting for me outside the museum, and my fiancée doesn't know... I went out for only minutes. Had I stayed, I might have saved Fuad, and that tears my heart apart."
              }
            }
          },
          {
            "id": "q_m3_shift",
            "category": "evidence",
            "text": {
              "ar": "وجدنا اسمك غائباً عن جدول الجولة في تلك الساعة، ماذا حدث؟",
              "en": "We found your name missing from the round schedule at that hour; what happened?"
            },
            "responses": {
              "calm": {
                "ar": "قد يكون خطأ في التسجيل؛ الجداول تُملأ على عجل في نهاية الوردية.",
                "en": "It may be a recording error; schedules are filled hastily at the end of the shift."
              },
              "pressing": {
                "ar": "هل تحاسبني على ورقة؟! الجداول تُكتب بأيدٍ مرتجفة بعد اثنتي عشرة ساعة عمل!",
                "en": "Do you hold me accountable for a paper?! Schedules are written by trembling hands after twelve hours of work!"
              },
              "sympathetic": {
                "ar": "أنا من أهمل التسجيل حين هرعت خارجاً... لم أكن أفكر في الجدول وأنا أبحث عن دقائق مع فتاة التقيتها مرات قليلة فقط.",
                "en": "I neglected the log when I rushed out... I wasn't thinking of the schedule while seeking minutes with a girl I had met only a few times."
              }
            }
          }
        ],
        "presentReactions": {
          "m04": {
            "text": {
              "ar": "يتصبّب طارق عرقاً وهو يرى السجل: «اسمي... نعم، وقّعته قبل أن أغادر. لماذا؟ هل تعتقدون أنني...؟ لا! لم أقتل فؤاداً! خرجت لدقائق فقط، أقسم بالله!»",
              "en": "Tariq sweats as he sees the log: 'My name... yes, I signed it before I left. Why? Do you think I...? No! I didn't kill Fuad! I only stepped out for minutes, I swear!'"
            },
            "unlockQuestion": {
              "id": "q_m3_unlocked_log",
              "category": "secret",
              "text": {
                "ar": "من طلب منك الابتعاد عن القاعة الجنوبية تلك الليلة؟",
                "en": "Who asked you to step away from the south hall that night?"
              },
              "responses": {
                "calm": {
                  "ar": "رجل أنيق يرتدي ملابس غالية... لم يذكر اسمه، ودفع لي نقداً دون كلام كثير.",
                  "en": "An elegant man in expensive clothes... he gave no name, and paid me in cash without much talk."
                },
                "pressing": {
                  "ar": "لا أعرف من هو! أقسم أنني لم أرَ وجهه جيداً! كان الظلام يلفّ البوابة الخلفية!",
                  "en": "I don't know who he is! I swear I didn't see his face well! Darkness wrapped the back gate!"
                },
                "sympathetic": {
                  "ar": "كان يبدو رجل أعمال مهم... تحدث عن «صفقة خاصة» وأمرني ألا أخبر أحداً. لم أعلم أنها لوحة مسروقة، أقسم! ظننتها مجرد زيارة سرية.",
                  "en": "He seemed an important businessman... he spoke of a 'special deal' and ordered me to tell no one. I didn't know it was a stolen painting, I swear! I thought it was just a secret visit."
                }
              }
            }
          }
        }
      },
      {
        "id": "suspect_m4",
        "name": {
          "ar": "سيف العبدلي",
          "en": "Saif Al-Abdali"
        },
        "age": 57,
        "job": {
          "ar": "جامع تحف",
          "en": "Art Collector"
        },
        "relation": {
          "ar": "جامع تحف ثري وتربطه بالمتحف صفقات شراء سابقة",
          "en": "A wealthy art collector with past purchase deals with the museum"
        },
        "alibiWindow": {
          "start": "21:50",
          "end": "22:40"
        },
        "personality": "ruthless",
        "personalityDesc": {
          "ar": "رجل أعمال بارد وقاسٍ، لا يتردد في تهديد من يقف في طريق مصالحه.",
          "en": "A cold, ruthless businessman who does not hesitate to threaten anyone in the way of his interests."
        },
        "secret": {
          "ar": "موّل تزوير نسخة اللوحة ودفع رشوة للحارس طارق ليغضّ النظر، وكان يخطط لتهريب الأصل خارج البلاد.",
          "en": "He financed the forging of the painting's copy and bribed guard Tariq to look away, planning to smuggle the original out of the country."
        },
        "questions": [
          {
            "id": "q_m4_alibi",
            "category": "alibi",
            "text": {
              "ar": "أين كنت ليلة الجريمة بين الحادية عشرة والنصف ومنتصف الليل؟",
              "en": "Where were you on the night of the crime between 11:30 PM and midnight?"
            },
            "responses": {
              "calm": {
                "ar": "كنت في منزلي أستقبل ضيوفاً، وعدد من الشهود يثبتون ذلك.",
                "en": "I was at home receiving guests, and a number of witnesses confirm that."
              },
              "pressing": {
                "ar": "هل تعلم من أنا؟! لا توجّه إليّ أسئلة بنبرة اتهام، فأنا لا أُستجوب كالمجرمين!",
                "en": "Do you know who I am?! Do not address accusing questions to me; I am not interrogated like criminals!"
              },
              "sympathetic": {
                "ar": "أقدّر مجهودك، لكنني رجل أعمال مشغول... ليلتي كانت عادية ولم أطأ المتحف سوى في النهار.",
                "en": "I appreciate your effort, but I am a busy businessman... my night was ordinary and I set foot in the museum only by day."
              }
            }
          },
          {
            "id": "q_m4_relation",
            "category": "relation",
            "text": {
              "ar": "ما طبيعة علاقتك بالمتحف وبلوحة «الفجر الذهبي»؟",
              "en": "What is the nature of your relationship with the museum and 'The Golden Dawn' painting?"
            },
            "responses": {
              "calm": {
                "ar": "أنا جامع تحف، وأتابع مقتنيات المتحف بحكم شغفي، وقد تقدّمت بعروض شراء مشروعة سابقاً.",
                "en": "I am an art collector; I follow the museum's holdings out of passion, and I have previously made legitimate purchase offers."
              },
              "pressing": {
                "ar": "أنا أكبر مقتني التحف في البلد! المتحف يتشرف بعروضي، ولن أنحدر لسرقة ما أستطيع شراءه!",
                "en": "I am the country's greatest collector of antiquities! The museum is honored by my offers, and I would never stoop to stealing what I can buy!"
              },
              "sympathetic": {
                "ar": "عشقت تلك اللوحة من أول نظرة... تمنيتها في مجموعتي، وهذا ليس عيباً بل ذوق رفيع.",
                "en": "I fell in love with that painting at first sight... I wished it in my collection, and that is no flaw but refined taste."
              }
            }
          },
          {
            "id": "q_m4_motive",
            "category": "motive",
            "text": {
              "ar": "هل موّلت تزوير نسخة من اللوحة للاستيلاء على الأصل؟",
              "en": "Did you finance forging a copy of the painting to seize the original?"
            },
            "responses": {
              "calm": {
                "ar": "ادعاء باطل تماماً. أنا أشتري بالفواتير والقانون، ولا حاجة لي بالخداع.",
                "en": "A completely baseless claim. I buy with invoices and the law, and have no need for deception."
              },
              "pressing": {
                "ar": "هذا افتراء خطير! سأقاضيك على كل كلمة! سمعتي في السوق أغلى من كل لوحات هذا المتحف!",
                "en": "This is a serious slander! I will sue you for every word! My reputation in the market is worth more than all this museum's paintings!"
              },
              "sympathetic": {
                "ar": "لكل جامع خطايا صغيرة... لكن القتل؟ لا. أنا رجل صفقات، لا رجل دماء.",
                "en": "Every collector has small sins... but murder? No. I am a man of deals, not a man of blood."
              }
            }
          },
          {
            "id": "q_m4_witness",
            "category": "witness",
            "text": {
              "ar": "من تعرف من موظفي المتحف ممن قد يخدم مصالحك؟",
              "en": "Whom do you know among the museum staff who might serve your interests?"
            },
            "responses": {
              "calm": {
                "ar": "أعرف أمين المتحف معرفة مهنية، وتبادلنا عروضاً مشروعة فقط.",
                "en": "I know the curator professionally, and we exchanged only legitimate offers."
              },
              "pressing": {
                "ar": "علاقاتي واسعة ومشروعة! لن أسمح لك بتشويهها بتلميحات رخيصة!",
                "en": "My connections are broad and legitimate! I will not let you tarnish them with cheap insinuations!"
              },
              "sympathetic": {
                "ar": "تعاملت مع الأمين خالد ومع المرمّمة ريم بخصوص اللوحة... ريم كانت متحمسة أكثر من اللازم، وهذا أثار انتباهي.",
                "en": "I dealt with curator Khalid and restorer Reem regarding the painting... Reem was overenthusiastic, which caught my attention."
              }
            }
          },
          {
            "id": "q_m4_secret",
            "category": "secret",
            "text": {
              "ar": "لماذا زرتَ المتحف نهاراً قبل الجريمة بزيارة غير معلنة؟",
              "en": "Why did you visit the museum by day before the crime on an unannounced visit?"
            },
            "responses": {
              "calm": {
                "ar": "زرت المعرض كأي زائر، ولم يمنعني أحد من التجول في القاعات العامة.",
                "en": "I visited the exhibition like any visitor, and no one stopped me from strolling the public halls."
              },
              "pressing": {
                "ar": "هل صار دخول معرض عام جريمة؟! أنا رجل معروف، ولا أخفي زياراتي!",
                "en": "Has entering a public exhibition become a crime?! I am a known man and I hide none of my visits!"
              },
              "sympathetic": {
                "ar": "جئت لأعاين اللوحة عن قرب... كان اتفاق مبدئي على «اقتنائها» بطريقة خاصة، لكنني لم أطلب قتل أحد، ولم أتوقع هذا الجنون.",
                "en": "I came to examine the painting up close... there was an initial agreement to 'acquire' it through a special arrangement, but I never asked for anyone's death, and did not expect this madness."
              }
            }
          },
          {
            "id": "q_m4_deal",
            "category": "evidence",
            "text": {
              "ar": "عثرنا على أثر حذائك قرب الجثة، كيف تفسّر ذلك؟",
              "en": "We found a print of your shoe near the body; how do you explain that?"
            },
            "responses": {
              "calm": {
                "ar": "زرت المتحف نهاراً، ومن الطبيعي أن توجد آثار حذائي في قاعاته.",
                "en": "I visited the museum by day, so it is natural that traces of my shoe exist in its halls."
              },
              "pressing": {
                "ar": "هل تظن أن كل من يملك حذاءً فاخراً قاتل؟! هذه سخافة لا ترتقي لمستوى اتهام!",
                "en": "Do you think everyone with an expensive shoe is a killer?! This is absurdity unworthy of an accusation!"
              },
              "sympathetic": {
                "ar": "حذائي يترك أثراً في كل مكان أزوره، هذا ليس سراً... لكنني لم أكن هنا ليلاً، أقسم بكل ما أملك.",
                "en": "My shoe leaves a trace everywhere I go, that is no secret... but I was not here at night, I swear by all I own."
              }
            }
          }
        ],
        "presentReactions": {
          "m04": {
            "text": {
              "ar": "يتجهم سيف بامتعاض: «سجل الوردية؟ نعم، اسمي مسجّل كزائر رسمي نهاراً. علاقتي بالمتحف علنية تماماً، ولن أدفنها لأن حارساً مات بالخطأ في مكان آخر.»",
              "en": "Saif frowns with distaste: 'The shift log? Yes, my name is recorded as an official daytime visitor. My relationship with the museum is entirely public, and I will not bury it because a guard died by mistake elsewhere.'"
            },
            "unlockQuestion": {
              "id": "q_m4_unlocked_deal",
              "category": "motive",
              "text": {
                "ar": "ما الذي اتفقت عليه مع من يخدمك داخل المتحف؟",
                "en": "What did you agree upon with whoever serves you inside the museum?"
              },
              "responses": {
                "calm": {
                  "ar": "اتفاق مالي معتاد لاقتناء قطعة فنية، يُوثّق عادةً لدى محامٍ ولا علاقة له بالجريمة.",
                  "en": "An ordinary financial agreement to acquire an artwork, usually notarized by a lawyer, with no relation to the murder."
                },
                "pressing": {
                  "ar": "هذا شأن خاص بين رجال أعمال! لن أشرح صفقاتي لك، ولن أدفع ثمن جريمة لم أرتكبها!",
                  "en": "This is a private matter between businessmen! I will not explain my deals to you, and I will not pay for a crime I did not commit!"
                },
                "sympathetic": {
                  "ar": "دفعتُ مبلغاً لتسهيل «نقل» اللوحة بعد الإغلاق... كنت أدفع لمقابل لا لقاتل. حين سمعت بمقتل الحارس انسحبت خوفاً من الفضيحة.",
                  "en": "I paid a sum to facilitate 'moving' the painting after closing... I was paying for a counterpart, not a killer. When I heard of the guard's death I withdrew, fearing scandal."
                }
              }
            }
          }
        }
      }
    ]
  },
  {
    "id": "case_003",
    "killerId": "suspect_h4",
    "sceneId": "hotel",
    "motiveOptions": {
      "correctId": "motive_expose",
      "options": [
        {
          "id": "motive_debt",
          "text": {
            "ar": "سرقة نقود الضيف ومقتنياته الثمينة من الجناح لتسديد ديون قمار متراكمة",
            "en": "Stealing the guest's cash and valuables from the suite to pay off mounting gambling debts"
          }
        },
        {
          "id": "motive_expose",
          "text": {
            "ar": "إسكات الضيف بعد أن اكتشف تلاعبه بنظام بطاقات الغرف وسرقة مقتنيات النزلاء وهدّده بفضحه",
            "en": "Silencing the guest after he discovered his manipulation of the room-card system and theft of guests' belongings, and threatened to expose him"
          }
        },
        {
          "id": "motive_revenge",
          "text": {
            "ar": "انتقام شخصي بعد خلاف قديم على صفقة فاشلة خسر فيها القاتل ثروته",
            "en": "Personal revenge after an old dispute over a failed deal in which the killer lost his fortune"
          }
        }
      ]
    },
    "endings": {
      "full": {
        "title": {
          "ar": "اعتراف في بهو الفندق",
          "en": "Confession in the Hotel Lobby"
        },
        "text": {
          "ar": "عندما وضعت الأدلة الحاسمة أمام {killer}، حاول التملّص بابتسامة باردة، لكن بصمته على المقبض الداخلي وبطاقة المفتاح المستنسخة وقارورة المهدّئ حاصرته من كل جهة. انهار واعترف أنه كان يستنسخ بطاقات الغرف ليسرق مقتنيات النزلاء الأثرياء، وأن طلال الحربي اكتشف الأمر وهدّده بالفضح، فأضاف مهدّئاً إلى مشروبه ليلة اختفائه ليبقى الوهم أن الجناح كان مغلقاً من الداخل. أُعيدت الثقة إلى فندق الأوركيد الملكي، ودخل {killer} السجن، وأضفت إلى سجلك قضية أُغلقت بإحكام.",
          "en": "When you laid the crucial evidence before {killer}, he tried to deflect with a cold smile, but his fingerprint on the inner handle, the cloned keycard and the sedative vial cornered him from every side. He broke down and confessed that he had been cloning room cards to steal the belongings of wealthy guests, that Talal Al-Harbi discovered it and threatened to expose him, so he slipped a sedative into his drink on the night he vanished to keep up the illusion that the suite was locked from the inside. Trust returned to the Royal Orchid Hotel, {killer} went to prison, and you added a tightly closed case to your record."
        }
      },
      "partial": {
        "title": {
          "ar": "قضية تنهار جزئياً",
          "en": "A Case Partially Collapses"
        },
        "text": {
          "ar": "قدّمت اتهامك، لكنك لم تُحكم شبكة الأدلة حول المتهم. بدا الدافع مرتبكاً، وهاجم المحامي ثغرات التسلسل الزمني وسلسلة بطاقة المفتاح غير المكتملة حتى اهتزت صورة القاتل أمام المحلفين. أُعيدت القضية للتحقيق وبقيت نجمة واحدة مضاءة في سجلك؛ درس جديد بأن الحقيقة تحتاج أدلة مترابطة لا حدساً عابراً.",
          "en": "You made your accusation, but you did not tighten the net of evidence around the suspect. The motive sounded confused, and the defense attorney attacked the timeline gaps and the incomplete keycard chain until the killer's image wavered before the jury. The case was sent back for further investigation and a single star remained lit in your record; a new lesson that truth needs coherent evidence, not fleeting intuition."
        }
      },
      "innocent": {
        "title": {
          "ar": "بريء... والقاتل يهرب",
          "en": "Innocent... and the Killer Escapes"
        },
        "text": {
          "ar": "عندما قرأت الاتهام، نظر إليك {suspect} بذهول ثم انهار. كشف التحقيق سرّه: {secret} — لكنه لم يكن القاتل. وبينما كانت المحكمة تبرّئه، غادر {killer} المدينة بهدوء حاملاً معه أسرار نظام بطاقات الفندق، تاركاً قضية مفتوحة وندماً ثقيلاً في سجلك.",
          "en": "As you read out the accusation, {suspect} stared at you in disbelief and then broke down. The investigation revealed the secret: {secret} — but it was not the killer. While the court cleared the innocent suspect, {killer} quietly left the city carrying the secrets of the hotel's card system, leaving behind an open case and a heavy regret in your record."
        }
      }
    },
    "title": {
      "ar": "اختفاء ضيف في فندق فخم",
      "en": "The Missing Guest at the Luxury Hotel"
    },
    "intro": {
      "ar": "في فندق «الأوركيد الملكي» الفخم، اختفى رجل الأعمال طلال الحربي فجأة من جناحه رقم 704. بقي باب الجناح مغلقاً من الداخل، وبعد يومين من البحث عُثر عليه ميتاً على سريره. لا آثار اقتحام ولا مقاومة، وكل شيء يشير إلى أن من دخل الغرفة كان يعرفها جيداً — أو يملك مفاتيحها.",
      "en": "At the luxurious Royal Orchid Hotel, businessman Talal Al-Harbi suddenly vanished from suite 704. The suite door stayed locked from the inside, and after two days of searching he was found dead on his bed. There were no signs of forced entry or struggle, and everything indicates that whoever entered the room knew it well — or held its keys."
    },
    "victim": {
      "name": {
        "ar": "طلال الحربي",
        "en": "Talal Al-Harbi"
      },
      "description": {
        "ar": "رجل أعمال في السابعة والأربعين من عمره، نزيل دائم في جناح 704، معروف بصفقاته المالية الغامضة وحساسيته الشديدة تجاه خصوصيته.",
        "en": "A 47-year-old businessman, a regular guest in suite 704, known for his murky financial deals and extreme sensitivity about his privacy."
      },
      "placeOfDeath": {
        "ar": "جناح رقم 704 في فندق الأوركيد الملكي",
        "en": "Suite 704 at the Royal Orchid Hotel"
      },
      "timeOfDeath": {
        "ar": "بين العاشرة والنصف والحادية عشرة والنصف مساءً",
        "en": "Between 10:30 PM and 11:30 PM"
      }
    },
    "autopsy": {
      "cause": {
        "ar": "تجاوز جرعة مهدّئ قوي أُضيف إلى مشروب الضيف، سبّب هبوطاً حاداً في الجهاز التنفسي وتوقفاً للقلب دون أي آثار عنف ظاهرة.",
        "en": "An overdose of a strong sedative added to the guest's drink caused acute respiratory depression and cardiac arrest, with no visible signs of violence."
      },
      "deathWindow": {
        "start": "22:30",
        "end": "23:30"
      },
      "findings": [
        {
          "ar": "لا توجد أي آثار مقاومة أو عنف؛ الضحية كان في حالة استرخاء تام عند الوفاة، ما يعني أن المهدّئ أُضيف إلى مشروبه دون علمه.",
          "en": "No signs of struggle or violence; the victim was fully relaxed at death, meaning the sedative was added to his drink without his knowledge."
        },
        {
          "ar": "تركيز المهدّئ في الدم يضع الوفاة في نافذة بين العاشرة والنصف والحادية عشرة والنصف مساءً، أي بعد وقت قصير من آخر طلب خدمة إلى الجناح.",
          "en": "The sedative concentration places death in a window between 10:30 and 11:30 PM, shortly after the last room-service order to the suite."
        },
        {
          "ar": "تحت أظافر الضحية آثار سائل تنظيف يُستخدم خصيصاً في قارئات بطاقات الأبواب المغناطيسية، ما يشير إلى تلامسه مع قارئ البطاقة قبل وفاته.",
          "en": "Under the victim's nails are traces of a cleaning fluid used specifically on magnetic door-card readers, indicating contact with the card reader before his death."
        }
      ]
    },
    "location": {
      "name": {
        "ar": "فندق الأوركيد الملكي – جناح 704",
        "en": "Royal Orchid Hotel – Suite 704"
      },
      "description": {
        "ar": "فندق خمس نجوم في وسط المدينة، بأجنحة فاخرة ونظام دخول بالبطاقات المغناطيسية وكاميرات في كل ممر.",
        "en": "A five-star hotel downtown with luxury suites, a magnetic card-entry system, and cameras in every corridor."
      }
    },
    "scene": [
      {
        "id": "point_door",
        "name": {
          "ar": "مقبض الباب الداخلي",
          "en": "Inner Door Handle"
        },
        "desc": {
          "ar": "مقبض معدني على الجانب الداخلي لباب الجناح، لامع بشكل غير معتاد وكأن أحداً مسحه بعناية.",
          "en": "A metal handle on the inner side of the suite door, unusually shiny as if someone wiped it carefully."
        },
        "x": 70,
        "y": 47,
        "clueId": "h01"
      },
      {
        "id": "point_desk",
        "name": {
          "ar": "مكتب الغرفة",
          "en": "Room Desk"
        },
        "desc": {
          "ar": "مكتب خشبي صغير في زاوية الجناح، عليه أوراق وفاتورة فندق مثيرة للجدل.",
          "en": "A small wooden desk in the corner of the suite, holding papers and a disputed hotel bill."
        },
        "x": 14,
        "y": 51,
        "clueId": "h08"
      },
      {
        "id": "point_luggage",
        "name": {
          "ar": "حقيبة الضيف",
          "en": "Guest's Luggage"
        },
        "desc": {
          "ar": "حقيبة سفر مفتوحة قرب السرير، وبين ملابسها قصاصة ورقة بخط اليد.",
          "en": "An open suitcase near the bed, with a handwritten note tucked among its clothes."
        },
        "x": 50,
        "y": 86,
        "clueId": "h06"
      },
      {
        "id": "point_body",
        "name": {
          "ar": "جثة الضيف",
          "en": "Guest's Body"
        },
        "desc": {
          "ar": "جثة طلال الحربي ممددة على الأرض قرب السرير، والطبيب الشرعي ينتظر الإذن ببدء التشريح.",
          "en": "Talal Al-Harbi's body lies on the floor near the bed; the medical examiner awaits permission to begin the autopsy."
        },
        "x": 34,
        "y": 84,
        "clueId": "h05"
      },
      {
        "id": "point_camera",
        "name": {
          "ar": "كاميرا الممر",
          "en": "Corridor Camera"
        },
        "desc": {
          "ar": "كاميرا مراقبة مثبتة في سقف الممر مقابل باب الجناح، لكن تسجيلها لتلك الليلة مفقود.",
          "en": "A surveillance camera mounted on the corridor ceiling facing the suite door, but its recording from that night is missing."
        },
        "x": 79,
        "y": 17,
        "clueId": "h07"
      },
      {
        "id": "point_cart",
        "name": {
          "ar": "عربة خدمة الغرف",
          "en": "Room-Service Cart"
        },
        "desc": {
          "ar": "عربة خدمة متروكة قرب الباب، وعليها سجل دخول الغرفة الذي يحمل آخر الطلبات.",
          "en": "A room-service cart left near the door, carrying the room entry log with the latest orders."
        },
        "x": 58,
        "y": 66,
        "clueId": "h03"
      },
      {
        "id": "point_vent",
        "name": {
          "ar": "فتحة التهوية في الممر",
          "en": "Corridor Vent"
        },
        "desc": {
          "ar": "فتحة تهوية معدنية في جدار الممر، مساميرها مفكوكة حديثاً وتخفي شيئاً بداخلها.",
          "en": "A metal vent in the corridor wall, its screws freshly loosened, concealing something inside."
        },
        "x": 91,
        "y": 29,
        "clueId": "h02",
        "hiddenUntil": {
          "suspectId": "suspect_h4",
          "questionId": "q_h4_secret"
        }
      },
      {
        "id": "point_trash",
        "name": {
          "ar": "سلة مهملات الممر",
          "en": "Corridor Trash Bin"
        },
        "desc": {
          "ar": "سلة مهملات في نهاية الممر، تحتها قارورة زجاجية صغيرة مخبأة بعناية.",
          "en": "A trash bin at the end of the corridor, with a small glass vial carefully hidden beneath it."
        },
        "x": 89,
        "y": 77,
        "clueId": "h04",
        "hiddenUntil": {
          "suspectId": "suspect_h2",
          "questionId": "q_h2_secret"
        }
      }
    ],
    "clues": [
      {
        "id": "h01",
        "name": {
          "ar": "بصمة على المقبض الداخلي",
          "en": "Fingerprint on the Inner Handle"
        },
        "desc": {
          "ar": "بصمة إصبع جزئية على الجانب الداخلي لمقبض الباب، في موضع لا يلمسه إلا من دخل الجناح وأغلقه من الداخل.",
          "en": "A partial fingerprint on the inner side of the door handle, a spot only someone who entered the suite and locked it from inside would touch."
        },
        "type": "fingerprint",
        "importance": "crucial",
        "suspectIds": [
          "suspect_h4"
        ],
        "labSuspectIds": [
          "suspect_h4"
        ],
        "analyzable": true,
        "labType": "fingerprint",
        "labSeed": 6183,
        "certainty": "high",
        "labResult": {
          "ar": "البصمة مطابقة تماماً لبصمة زياد العنزي في قاعدة بيانات موظفي الفندق، وهي نقطة على الجانب الداخلي لا يلمسها النزيل نفسه.",
          "en": "The print is an exact match to Ziyad Al-Anzi's record in the hotel staff database, on the inner side that the guest himself would not touch."
        },
        "labResultMedium": {
          "ar": "أظهرت المطابقة السريعة تشابهاً جزئياً مع بصمة زياد العنزي، لكن جودة الطبعة على المقبض تمنع الجزم؛ يُنصح بإعادة المطابقة.",
          "en": "A quick comparison showed a partial similarity to Ziyad Al-Anzi's print, but print quality on the handle prevents certainty; re-matching is advised."
        },
        "recoveredClue": {
          "id": "h01_match",
          "name": {
            "ar": "تقرير مطابقة البصمة",
            "en": "Fingerprint Match Report"
          },
          "desc": {
            "ar": "تقرير مخبري يؤكد أن البصمة على المقبض الداخلي مطابقة لسجل زياد العنزي، موظف الاستقبال.",
            "en": "A lab report confirming the inner-handle fingerprint matches the record of Ziyad Al-Anzi, the receptionist."
          },
          "type": "document",
          "importance": "crucial",
          "suspectIds": [
            "suspect_h4"
          ]
        }
      },
      {
        "id": "h01_match",
        "name": {
          "ar": "تقرير مطابقة البصمة",
          "en": "Fingerprint Match Report"
        },
        "desc": {
          "ar": "تقرير مخبري يؤكد أن البصمة على المقبض الداخلي مطابقة لسجل زياد العنزي، موظف الاستقبال.",
          "en": "A lab report confirming the inner-handle fingerprint matches the record of Ziyad Al-Anzi, the receptionist."
        },
        "type": "document",
        "importance": "crucial",
        "suspectIds": [
          "suspect_h4"
        ]
      },
      {
        "id": "h02",
        "name": {
          "ar": "بطاقة مفتاح رئيسي مستنسخة",
          "en": "Cloned Master Keycard"
        },
        "desc": {
          "ar": "بطاقة مفتاح إلكترونية مخبأة في فتحة التهوية، مكتوب عليها رقم الجناح 704 بخط يدوي، ويبدو أنها منسوخة من بطاقة رئيسية.",
          "en": "An electronic keycard hidden in the vent, marked with suite 704 in handwriting, apparently cloned from a master card."
        },
        "type": "personal",
        "importance": "crucial",
        "suspectIds": [
          "suspect_h4"
        ]
      },
      {
        "id": "h03",
        "name": {
          "ar": "سجل دخول الغرفة",
          "en": "Room Entry Log"
        },
        "desc": {
          "ar": "سجل إلكتروني مطبوع لعربات الخدمة، يسجّل أوقات فتح باب الجناح 704، وفيه فتحة غير مبرَّرة عند الساعة الحادية عشرة والربع.",
          "en": "A printed electronic log for room-service carts recording when the door of suite 704 was opened, with an unexplained entry at 11:15 PM."
        },
        "type": "document",
        "importance": "important",
        "suspectIds": [
          "suspect_h2",
          "suspect_h4"
        ]
      },
      {
        "id": "h04",
        "name": {
          "ar": "قارورة مهدّئ فارغة",
          "en": "Empty Sedative Vial"
        },
        "desc": {
          "ar": "قارورة زجاجية صغيرة فارغة مخبأة تحت سلة المهملات، تحمل آثار مهدّئ قوي يُصرف بوصفة طبية.",
          "en": "A small empty glass vial hidden under the trash bin, bearing traces of a strong prescription sedative."
        },
        "type": "trace",
        "importance": "crucial",
        "suspectIds": [
          "suspect_h4"
        ],
        "analyzable": true,
        "labType": "trace",
        "certainty": "high",
        "labResult": {
          "ar": "تحليل البقايا يؤكد أنها مهدّئ قوي يُصرف بوصفة، وبصمة خفية على عنق القارورة تعود لزياد العنزي. الجرعة المتبقية تطابق تركيز المهدّئ في دم الضحية.",
          "en": "Residue analysis confirms it is a strong prescription sedative, and a faint print on the vial's neck belongs to Ziyad Al-Anzi. The remaining dose matches the sedative concentration in the victim's blood."
        }
      },
      {
        "id": "h05",
        "name": {
          "ar": "أثر حذاء أنيق",
          "en": "Elegant Shoe Print"
        },
        "desc": {
          "ar": "أثر حذاء جلدي أنيق بمقاس متوسط على سجادة الجناح قرب جثة الضيف.",
          "en": "A print of an elegant leather shoe, medium-sized, on the suite carpet near the guest's body."
        },
        "type": "trace",
        "importance": "misleading",
        "suspectIds": [
          "suspect_h3"
        ],
        "analyzable": true,
        "labType": "trace",
        "certainty": "medium",
        "misleading": true,
        "labResult": {
          "ar": "الحذاء من ماركة فاخرة يرتديها فيصل الدوسري، لكن الأثر يعود لزيارته النهارية للفندق قبل ساعات من الجريمة، لا لليلة اختفاء الضيف.",
          "en": "The shoe is a luxury brand worn by Faisal Al-Dosari, but the print belongs to his daytime visit to the hotel hours before the crime, not the night the guest vanished."
        }
      },
      {
        "id": "h06",
        "name": {
          "ar": "رسالة تهديد بخط اليد",
          "en": "Handwritten Threat Note"
        },
        "desc": {
          "ar": "قصاصة ورقية بين ملابس الحقيبة تحمل تهديداً بخط يدوي: «سأستردّ ما سرقته مني، أو سأدمّرك».",
          "en": "A paper scrap among the suitcase clothes bearing a handwritten threat: 'I will recover what you stole from me, or I will destroy you.'"
        },
        "type": "message",
        "importance": "important",
        "suspectIds": [
          "suspect_h5"
        ]
      },
      {
        "id": "h07",
        "name": {
          "ar": "سجل كاميرات ممسوح",
          "en": "Wiped Camera Log"
        },
        "desc": {
          "ar": "ملف تسجيل كاميرا الممر فارغ، وقد حُذفت منه الدقائق المحيطة باختفاء الضيف من طرف جهاز الاستقبال.",
          "en": "The corridor camera's recording file is empty; the minutes around the guest's disappearance were deleted from the reception terminal."
        },
        "type": "document",
        "importance": "misleading",
        "suspectIds": [
          "suspect_h1"
        ],
        "analyzable": true,
        "labType": "document",
        "labSeed": 8452,
        "certainty": "medium",
        "misleading": true,
        "paperText": {
          "ar": "سجل نظام المراقبة: حذف تسجيلات كاميرا الممر الشرقي (الطابق السابع) من الساعة 22:10 حتى 23:20. منفّذ العملية: حساب المدير العام. السبب المُدخل: مراجعة دورية وحذف مخالفات نزلاء.",
          "en": "Surveillance system log: deletion of east corridor camera recordings (seventh floor) from 22:10 to 23:20. Operator: general manager account. Recorded reason: routine review and deletion of guest violations."
        },
        "labResult": {
          "ar": "سجل الحذف يبيّن أن العملية جرت بحساب مدير الفندق نبيل الحداد، لكنه كان يمسح تسجيلات مخالفات نزلاء آخرين لأسباب تجارية، لا ليلة الجريمة تحديداً؛ أثر مضلل لا يربطه بلحظة الوفاة.",
          "en": "The deletion log shows the operation used hotel manager Nabil Al-Haddad's account, but he was wiping recordings of other guests' violations for business reasons, not specifically the murder night; a misleading trace that does not tie him to the moment of death."
        }
      },
      {
        "id": "h08",
        "name": {
          "ar": "فاتورة فندق متنازع عليها",
          "en": "Disputed Hotel Bill"
        },
        "desc": {
          "ar": "فاتورة إقامة الضيف على المكتب، فيها بنود مبالغ فيها وخصم غامض بتوقيع غير مقروء.",
          "en": "The guest's stay bill on the desk, with inflated items and a mysterious discount signed in unreadable handwriting."
        },
        "type": "document",
        "importance": "misleading",
        "suspectIds": [
          "suspect_h5"
        ],
        "analyzable": true,
        "labType": "document",
        "labSeed": 3760,
        "certainty": "medium",
        "misleading": true,
        "paperText": {
          "ar": "فاتورة إقامة – جناح 704: ليلة إضافية 1800، خدمة غرف 640، خصم خاص 1200 بتوقيع غير مقروء. ملاحظة: تسوية مستحقات مع الشريك م. ق.",
          "en": "Stay invoice – Suite 704: extra night 1800, room service 640, special discount 1200 with an unreadable signature. Note: settlement of dues with partner M. Q."
        },
        "labResult": {
          "ar": "تحليل الفاتورة يكشف أن الخصم الغامض صدر من شريك الضحية ماجد القحطاني لتسوية مستحقات تجارية، وهو خلاف مالي لا علاقة له بلحظة الوفاة؛ أثر مضلل.",
          "en": "Bill analysis reveals the mysterious discount was issued by the victim's business partner Majed Al-Qahtani to settle commercial dues, a financial dispute unrelated to the moment of death; a misleading trace."
        }
      }
    ],
    "suspects": [
      {
        "id": "suspect_h1",
        "name": {
          "ar": "نبيل الحداد",
          "en": "Nabil Al-Haddad"
        },
        "age": 52,
        "job": {
          "ar": "مدير الفندق",
          "en": "Hotel Manager"
        },
        "relation": {
          "ar": "يدير فندق الأوركيد الملكي منذ خمسة عشر عاماً",
          "en": "Has managed the Royal Orchid Hotel for fifteen years"
        },
        "alibiWindow": {
          "start": "21:30",
          "end": "22:20"
        },
        "personality": "arrogant",
        "personalityDesc": {
          "ar": "مدير متغطرس صارم، يخشى على سمعة الفندق أكثر من أي شيء آخر.",
          "en": "An arrogant, stern manager who fears for the hotel's reputation above all else."
        },
        "secret": {
          "ar": "يخفي خسائر مالية ضخمة في الفندق ويخطط لبيع بيانات النزلاء الأثرياء لطرف خارجي مقابل عمولة.",
          "en": "He hides massive financial losses at the hotel and plans to sell wealthy guests' data to an outside party for a commission."
        },
        "questions": [
          {
            "id": "q_h1_alibi",
            "category": "alibi",
            "text": {
              "ar": "أين كنت وقت اختفاء الضيف بين العاشرة والنصف والحادية عشرة والنصف مساءً؟",
              "en": "Where were you when the guest vanished between 10:30 and 11:30 PM?"
            },
            "responses": {
              "calm": {
                "ar": "كنت في مكتبي الإداري بالطابق الأرضي أراجع تقارير الإشغال، ثم غادرت إلى منزلي.",
                "en": "I was in my ground-floor office reviewing occupancy reports, then went home."
              },
              "pressing": {
                "ar": "أنا مدير هذا الفندق! لن أبرّر كل دقيقة من وقتي لموظف يتشكك فيّ، كانت مهامي الإدارية لا أكثر!",
                "en": "I am the manager of this hotel! I will not justify every minute to an officer who doubts me; I was on administrative duties, nothing more!"
              },
              "sympathetic": {
                "ar": "أتفهم أنك تؤدي عملك... كنت غارقاً في أوراق الميزانية، فالفندق يمر بضائقة مالية هذه الأيام.",
                "en": "I understand you are doing your job... I was drowning in budget papers, as the hotel is going through financial hardship these days."
              }
            }
          },
          {
            "id": "q_h1_relation",
            "category": "relation",
            "text": {
              "ar": "ما طبيعة علاقتك بالضيف طلال الحربي؟",
              "en": "What is the nature of your relationship with the guest Talal Al-Harbi?"
            },
            "responses": {
              "calm": {
                "ar": "نزيل دائم محترم، حجز جناح 704 مرات عديدة، ولم تكن بيننا أي مشاكل شخصية.",
                "en": "A respected regular guest who booked suite 704 many times; there were no personal problems between us."
              },
              "pressing": {
                "ar": "علاقة مدير بنزيل، لا أكثر! هل صار استقبال الضيوف تهمة في هذا الفندق؟",
                "en": "A manager-to-guest relationship, nothing more! Has hosting guests become a crime in this hotel?"
              },
              "sympathetic": {
                "ar": "كان رجلاً حساساً يطلب الخصوصية المطلقة... كنا نتعامل معه بحذر لأنه يغضب بسهولة.",
                "en": "He was a sensitive man who demanded absolute privacy... we dealt with him cautiously because he angered easily."
              }
            }
          },
          {
            "id": "q_h1_motive",
            "category": "motive",
            "text": {
              "ar": "سمعنا أن الفندق يمر بخسائر كبيرة، هل كان بإمكانك الاستفادة من مال الضيف؟",
              "en": "We heard the hotel is suffering heavy losses; could you have benefited from the guest's money?"
            },
            "responses": {
              "calm": {
                "ar": "الفندق مؤسسة عريقة، وأي ضائقة مؤقتة تُدار بالحكمة لا بالسرقة.",
                "en": "The hotel is a prestigious institution, and any temporary hardship is managed with wisdom, not theft."
              },
              "pressing": {
                "ar": "هذا افتراء مهين! سمعتي في قطاع الضيافة تساوي أكثر من كل أموال هذا الرجل! سأقاضيك!",
                "en": "This is an insulting slander! My reputation in hospitality is worth more than all this man's money! I will sue you!"
              },
              "sympathetic": {
                "ar": "الحقيقة أن الفندق متعثر ماليّاً، وأنقذت سمعته مراراً... لكني لم أفكر يوماً في مال ضيف.",
                "en": "The truth is the hotel is financially strained and I saved its reputation many times... but I never thought of a guest's money."
              }
            }
          },
          {
            "id": "q_h1_witness",
            "category": "witness",
            "text": {
              "ar": "من رأيت يتحرك في الطابق السابع قبل اختفاء الضيف؟",
              "en": "Whom did you see moving on the seventh floor before the guest vanished?"
            },
            "responses": {
              "calm": {
                "ar": "رأيت هند عاملة الغرف تدفع عربتها، وزياد موظف الاستقبال يمر بالممر أكثر من مرة.",
                "en": "I saw Hind the maid pushing her cart, and Ziyad the receptionist passing through the corridor more than once."
              },
              "pressing": {
                "ar": "لست حارساً ليلياً أراقب الممرات! لكن زياد كان يتردد على الطابق السابع بلا سبب واضح.",
                "en": "I am not a night guard watching corridors! But Ziyad kept frequenting the seventh floor with no clear reason."
              },
              "sympathetic": {
                "ar": "أكثر ما أثار انتباهي هو زياد... كان يتصرف بعصبية غير معتادة تلك الليلة.",
                "en": "What caught my attention most was Ziyad... he was acting unusually nervous that night."
              }
            }
          },
          {
            "id": "q_h1_secret",
            "category": "secret",
            "text": {
              "ar": "نعلم بوجود اتصالات غامضة بينك وبين طرف خارجي بخصوص بيانات النزلاء، ما القصة؟",
              "en": "We know of mysterious contacts between you and an outside party regarding guest data; what is the story?"
            },
            "responses": {
              "calm": {
                "ar": "تعاون تجاري مشروع لتحسين خدمات الفندق، لا أكثر، وبيانات النزلاء محمية تماماً.",
                "en": "A legitimate business cooperation to improve hotel services, nothing more; guest data is fully protected."
              },
              "pressing": {
                "ar": "هذا شأن إداري داخلي! لن أشرح قرارات مجلس الإدارة لمحقق فضولي!",
                "en": "This is an internal administrative matter! I will not explain the board's decisions to a nosy investigator!"
              },
              "sympathetic": {
                "ar": "حسناً... كنت أتفاوض لبيع بيانات إحصائية عن النزلاء لسداد ديون الفندق، لكنه اتفاق لم يكتمل ولم يمس أحداً.",
                "en": "Fine... I was negotiating to sell statistical guest data to pay the hotel's debts, but it never concluded and harmed no one."
              }
            }
          },
          {
            "id": "q_h1_cameras",
            "category": "evidence",
            "text": {
              "ar": "لماذا مُسحت تسجيلات كاميرا الممر تلك الليلة بحسابك الإداري؟",
              "en": "Why were the corridor camera recordings erased that night using your administrative account?"
            },
            "responses": {
              "calm": {
                "ar": "أراجع تسجيلات الكاميرات دورياً لحذف مخالفات النزلاء، وقد صادف ذلك الليلة نفسها.",
                "en": "I periodically review camera footage to delete guest violations, and it happened to fall on the same night."
              },
              "pressing": {
                "ar": "هل تلمح إلى أنني أخفي شيئاً؟! أنا من يحمي سمعة الفندق من فضائح النزلاء، لا من يرتكب الجرائم!",
                "en": "Are you insinuating I am hiding something?! I protect the hotel from guest scandals, I do not commit crimes!"
              },
              "sympathetic": {
                "ar": "أعترف أن توقيت المسح مؤسف... لكنه كان روتينياً، وأنا لم أدخل جناح 704 في حياتي.",
                "en": "I admit the timing of the wipe was unfortunate... but it was routine, and I have never entered suite 704 in my life."
              }
            }
          },
          {
            "id": "q_h1_reputation",
            "category": "evidence",
            "text": {
              "ar": "هل طلب منك أحد إخفاء أي شيء يتعلق بهذا الضيف؟",
              "en": "Did anyone ask you to hide anything related to this guest?"
            },
            "responses": {
              "calm": {
                "ar": "لا أحد. أوامري تصدر مني وحدي في هذا الفندق.",
                "en": "No one. Orders in this hotel come from me alone."
              },
              "pressing": {
                "ar": "أنا لا أتلقى أوامر من أحد! كف عن هذه الأسئلة السخيفة!",
                "en": "I take orders from no one! Stop these ridiculous questions!"
              },
              "sympathetic": {
                "ar": "الضيف نفسه طلب مني في اتصال أن لا يدخل أحد جناحه... كان يخفي شيئاً ما، لكنني لم أعرف ما هو.",
                "en": "The guest himself called me asking that no one enter his suite... he was hiding something, but I never knew what."
              }
            }
          }
        ]
      },
      {
        "id": "suspect_h2",
        "name": {
          "ar": "هند المطيري",
          "en": "Hind Al-Mutairi"
        },
        "age": 34,
        "job": {
          "ar": "عاملة غرف",
          "en": "Room-Service Maid"
        },
        "relation": {
          "ar": "عاملة خدمة الغرف في الطابق السابع منذ ثلاث سنوات",
          "en": "Room-service maid on the seventh floor for three years"
        },
        "alibiWindow": {
          "start": "23:35",
          "end": "23:55"
        },
        "personality": "nervous",
        "personalityDesc": {
          "ar": "عاملة مجتهدة لكنها شديدة التوتر والقلق، تخشى فقدان عملها في أي لحظة.",
          "en": "A hardworking but highly anxious maid who fears losing her job at any moment."
        },
        "secret": {
          "ar": "وجدت قارورة مهدّئ فارغة في جناح الضيف، وخشيت أن يُتَّهم بالسرقة، فأخفتها تحت سلة المهملات في الممر.",
          "en": "She found an empty sedative vial in the guest's suite and, fearing she would be accused of theft, hid it under the corridor trash bin."
        },
        "questions": [
          {
            "id": "q_h2_alibi",
            "category": "alibi",
            "text": {
              "ar": "أين كنت وقت اختفاء الضيف بين العاشرة والنصف والحادية عشرة والنصف؟",
              "en": "Where were you when the guest vanished between 10:30 and 11:30 PM?"
            },
            "responses": {
              "calm": {
                "ar": "كنت أنظف الغرف المجاورة في الطابق السابع، ثم نزلت إلى غرفة العمال.",
                "en": "I was cleaning the neighboring rooms on the seventh floor, then went down to the staff room."
              },
              "pressing": {
                "ar": "أقسم أنني لم أدخل جناح 704! كنت أنظف الغرف الأخرى، أرجوك لا تتهمني! سأفقد عملي!",
                "en": "I swear I did not enter suite 704! I was cleaning the other rooms, please don't accuse me! I'll lose my job!"
              },
              "sympathetic": {
                "ar": "كنت متعبة ووحيدة... أنهيت غرف الطابق ثم جلست أرتاح قليلاً، لم أرَ شيئاً غريباً.",
                "en": "I was tired and alone... I finished the floor's rooms then sat to rest a little; I saw nothing strange."
              }
            }
          },
          {
            "id": "q_h2_relation",
            "category": "relation",
            "text": {
              "ar": "كيف كان الضيف في جناح 704 يعاملك؟",
              "en": "How did the guest in suite 704 treat you?"
            },
            "responses": {
              "calm": {
                "ar": "كان كريماً لكنه شديد التدقيق، يطلب أشياء كثيرة ويغضب إن تأخرت.",
                "en": "He was generous but very demanding, requesting many things and angering if I was late."
              },
              "pressing": {
                "ar": "لماذا تسألني هكذا؟! كنت فقط أنظف غرفته وأنفّذ طلباته، لا شيء أكثر!",
                "en": "Why are you asking me like that?! I only cleaned his room and fulfilled his requests, nothing more!"
              },
              "sympathetic": {
                "ar": "كان قاسياً في كلامه أحياناً... لكنه لم يؤذني، كنت أحاول إرضاءه لأحافظ على وظيفتي.",
                "en": "He was harsh in his words sometimes... but he never hurt me; I tried to please him to keep my job."
              }
            }
          },
          {
            "id": "q_h2_motive",
            "category": "motive",
            "text": {
              "ar": "هل سرقتِ أي شيء من مقتنيات الضيف؟",
              "en": "Did you steal anything from the guest's belongings?"
            },
            "responses": {
              "calm": {
                "ar": "أنا بريئة، وأمانتي معروفة في الفندق منذ ثلاث سنوات.",
                "en": "I am innocent, and my honesty has been known at the hotel for three years."
              },
              "pressing": {
                "ar": "لست سارقة! ابحث عن السارق الحقيقي بدل مطاردتي!",
                "en": "I am not a thief! Look for the real thief instead of chasing me!"
              },
              "sympathetic": {
                "ar": "لم أسرق شيئاً... لكنني خفت حين رأيت شيئاً غريباً في جناحه، فحاولت إبعاده عن نفسي.",
                "en": "I stole nothing... but I was scared when I saw something strange in his suite, so I tried to distance myself from it."
              }
            }
          },
          {
            "id": "q_h2_witness",
            "category": "witness",
            "text": {
              "ar": "ما الذي رأيته في الطابق السابع تلك الليلة؟",
              "en": "What did you see on the seventh floor that night?"
            },
            "responses": {
              "calm": {
                "ar": "رأيت زياد موظف الاستقبال يقف قرب جناح 704 وهو يحمل شيئاً صغيراً في يده.",
                "en": "I saw Ziyad the receptionist standing near suite 704 holding something small in his hand."
              },
              "pressing": {
                "ar": "قلت لك! زياد كان يتردد على الطابق كثيراً وبلا سبب، اسألوه هو لا أنا!",
                "en": "I told you! Ziyad frequented the floor a lot without reason, ask him, not me!"
              },
              "sympathetic": {
                "ar": "سمعت باب جناح 704 يُفتح ويُغلق مرتين... وكانت خطوات خفيفة تتجه نحو الممر.",
                "en": "I heard the door of suite 704 open and close twice... and light footsteps heading toward the corridor."
              }
            }
          },
          {
            "id": "q_h2_secret",
            "category": "secret",
            "text": {
              "ar": "ماذا كنتِ تخبئين تحت سلة المهملات في نهاية الممر؟",
              "en": "What were you hiding under the trash bin at the end of the corridor?"
            },
            "responses": {
              "calm": {
                "ar": "لا شيء يخصني هناك، أنا أرمي القمامة فقط.",
                "en": "Nothing of mine is there; I only throw out the trash."
              },
              "pressing": {
                "ar": "لماذا تظن أنني أخبئ شيئاً؟! أنا مجرد عاملة غرف! اتركني وشأني!",
                "en": "Why do you think I'm hiding something?! I'm just a maid! Leave me alone!"
              },
              "sympathetic": {
                "ar": "حسناً... وجدت قارورة صغيرة فارغة في جناح الضيف فخفت أن يتهموني بسرقتها، فأخفيتها تحت السلة.",
                "en": "Fine... I found a small empty vial in the guest's suite and feared they would accuse me of stealing it, so I hid it under the bin."
              }
            }
          },
          {
            "id": "q_h2_cart",
            "category": "evidence",
            "text": {
              "ar": "سجل عربة الخدمة يظهر فتحاً لباب الجناح في وقت متأخر، هل أنت من فعلت ذلك؟",
              "en": "The room-service cart log shows the suite door opening late at night; was it you who did that?"
            },
            "responses": {
              "calm": {
                "ar": "طلبات الخدمة تُسجَّل بأسماء النزلاء، وليس من حق عاملة الغرف فتح الأجنحة ليلاً.",
                "en": "Service orders are logged under guest names, and a maid has no right to open suites at night."
              },
              "pressing": {
                "ar": "لم أفتح الباب! العربة كانت متروكة قرب المدخل، وأنا نزلت قبل ذلك بكثير!",
                "en": "I did not open the door! The cart was left near the entrance, and I had gone down long before!"
              },
              "sympathetic": {
                "ar": "العربة كانت هناك حين مررت... وقد رأيت بطاقة مفتاح صغيرة تسقط من فوقها.",
                "en": "The cart was there when I passed... and I saw a small keycard fall from atop it."
              }
            }
          },
          {
            "id": "q_h2_vial",
            "category": "evidence",
            "text": {
              "ar": "ما علاقتك بالمهدّئات الطبية؟",
              "en": "What is your connection to medical sedatives?"
            },
            "responses": {
              "calm": {
                "ar": "لا علاقة لي بها إطلاقاً، أنا لا أتناول أي أدوية من هذا النوع.",
                "en": "No connection at all; I take no medication of that kind."
              },
              "pressing": {
                "ar": "هل تظنني مجرمة؟! لا أعرف شيئاً عن المهدّئات!",
                "en": "Do you think I'm a criminal?! I know nothing about sedatives!"
              },
              "sympathetic": {
                "ar": "أنا فقط... رأيت القارورة، ولمستها حين التقطتها من الأرض لأرميها، هذا كل ما حدث.",
                "en": "I only... saw the vial, and touched it when I picked it up from the floor to throw it away, that is all."
              }
            }
          }
        ],
        "presentReactions": {
          "h03": {
            "text": {
              "ar": "ترتجف يدا هند وهي تحدق في السجل: «أنا... نعم مررت بالعربة، لكنني لم أفتح الباب. رأيت بطاقة تسقط من فوقها فأخذتها خوفاً، ثم أعدتها إلى مكانها.»",
              "en": "Hind's hands tremble as she stares at the log: 'I... yes I passed the cart, but I did not open the door. I saw a card fall from atop it, so I picked it up in fear, then returned it to its place.'"
            },
            "unlockQuestion": {
              "id": "q_h2_unlocked_log",
              "category": "evidence",
              "text": {
                "ar": "لماذا عدتِ إلى الممر بعد نزولك؟",
                "en": "Why did you return to the corridor after going down?"
              },
              "responses": {
                "calm": {
                  "ar": "نسيت أدوات التنظيف فأخذتها بسرعة ثم نزلت مرة أخرى.",
                  "en": "I forgot my cleaning tools, so I grabbed them quickly and went down again."
                },
                "pressing": {
                  "ar": "قلت لك! لم أعد لأي شيء مهم! اتركني، أرجوك!",
                  "en": "I told you! I didn't return for anything important! Leave me, please!"
                },
                "sympathetic": {
                  "ar": "عدت لأتأكد أن العربة في مكانها... كنت خائفة من أن يُلام أحد بسببي.",
                  "en": "I returned to make sure the cart was in place... I was afraid someone would be blamed because of me."
                }
              }
            }
          }
        }
      },
      {
        "id": "suspect_h3",
        "name": {
          "ar": "فيصل الدوسري",
          "en": "Faisal Al-Dosari"
        },
        "age": 41,
        "job": {
          "ar": "ضيف آخر في الفندق",
          "en": "Another Hotel Guest"
        },
        "relation": {
          "ar": "نزيل في الطابق السابع، وصديق عمل قديم للضحية",
          "en": "A guest on the seventh floor and an old business acquaintance of the victim"
        },
        "alibiWindow": {
          "start": "22:40",
          "end": "23:20"
        },
        "personality": "proud",
        "personalityDesc": {
          "ar": "رجل أعمال فخور وأنيق، يهتم بمظهره وسمعته في الأوساط الراقية أكثر من أي شيء.",
          "en": "A proud, elegant businessman who cares about his appearance and reputation in high society above all."
        },
        "secret": {
          "ar": "يتعامل بطرق مالية ملتوية ويخشى أن يكشف الضحية تورطه في صفقة وهمية، وقد زار الطابق السابع نهاراً.",
          "en": "He engages in shady financial practices and fears the victim would expose his involvement in a sham deal; he visited the seventh floor by day."
        },
        "questions": [
          {
            "id": "q_h3_alibi",
            "category": "alibi",
            "text": {
              "ar": "أين كنت وقت اختفاء الضيف؟",
              "en": "Where were you when the guest vanished?"
            },
            "responses": {
              "calm": {
                "ar": "كنت في جناحي في الطابق السابع أراجع أوراقي، ثم نزلت إلى البهو لتناول القهوة.",
                "en": "I was in my suite on the seventh floor reviewing papers, then went down to the lobby for coffee."
              },
              "pressing": {
                "ar": "أنا ضيف في هذا الفندق المحترم، ولست متهمّاً! كنت في جناحي، وهذا يكفي!",
                "en": "I am a guest in this respectable hotel, not a suspect! I was in my suite, and that suffices!"
              },
              "sympathetic": {
                "ar": "كنت قلقاً ومنشغلاً بصفقاتي... ربما مررت بالممر دون أن أنتبه للتفاصيل.",
                "en": "I was anxious and preoccupied with my deals... I may have passed the corridor without noticing details."
              }
            }
          },
          {
            "id": "q_h3_relation",
            "category": "relation",
            "text": {
              "ar": "ما علاقتك بالضيف طلال الحربي؟",
              "en": "What is your relationship with the guest Talal Al-Harbi?"
            },
            "responses": {
              "calm": {
                "ar": "معرفة عمل قديمة، تبادلنا صفقات عدة، ولم يكن بيننا خصومة حديثة.",
                "en": "An old business acquaintance; we exchanged several deals, with no recent hostility."
              },
              "pressing": {
                "ar": "علاقتنا شأن تجاري خاص! لن أسمح لك بتحويلها إلى مسرح جريمة!",
                "en": "Our relationship is a private business matter! I will not let you turn it into a crime scene!"
              },
              "sympathetic": {
                "ar": "كنا شركاء في صفقة كبيرة انهارت... وبقي بيننا شيء من المرارة، لكنها مرارة أعمال لا دماء.",
                "en": "We were partners in a big deal that collapsed... some bitterness remained, but it is the bitterness of business, not blood."
              }
            }
          },
          {
            "id": "q_h3_motive",
            "category": "motive",
            "text": {
              "ar": "هل كان للضيف دين أو خلاف مالي معك؟",
              "en": "Did the guest have a debt or financial dispute with you?"
            },
            "responses": {
              "calm": {
                "ar": "تصفية حساباتنا كانت جارية بشكل طبيعي، ولا شيء يستدعي القلق.",
                "en": "Our settlement was proceeding normally, nothing to worry about."
              },
              "pressing": {
                "ar": "كل رجال الأعمال بينهم خلافات! هذا لا يجعلنا قتلة! أهذا كل ما لديك؟",
                "en": "All businessmen have disputes! That does not make us killers! Is that all you have?"
              },
              "sympathetic": {
                "ar": "كان يدين لي بمبلغ كبير، وكنت أخشى ألا يسدده... لكن المال لا يستحق جريمة.",
                "en": "He owed me a large sum, and I feared he would not repay... but money is not worth a crime."
              }
            }
          },
          {
            "id": "q_h3_witness",
            "category": "witness",
            "text": {
              "ar": "من لاحظت يتحرك في الطابق السابع تلك الليلة؟",
              "en": "Whom did you notice moving on the seventh floor that night?"
            },
            "responses": {
              "calm": {
                "ar": "رأيت موظف الاستقبال زياد يصعد نحو الطابق السابع متجهاً إلى غرفة الخدمة.",
                "en": "I saw Ziyad the receptionist heading up to the seventh floor toward the service room."
              },
              "pressing": {
                "ar": "لم أراقب أحداً! كنت مشغولاً بشؤوني، وموظفو الفندق يتحركون طوال الوقت!",
                "en": "I was not watching anyone! I was busy with my affairs, and hotel staff move about all the time!"
              },
              "sympathetic": {
                "ar": "لاحظت أن زياد كان قلقاً وغير طبيعي... وحين رآني تجنّب النظر إليّ.",
                "en": "I noticed Ziyad was anxious and unnatural... and when he saw me he avoided my gaze."
              }
            }
          },
          {
            "id": "q_h3_secret",
            "category": "secret",
            "text": {
              "ar": "ما الذي أخفيته عنا بخصوص زيارتك النهارية للطابق السابع؟",
              "en": "What are you hiding about your daytime visit to the seventh floor?"
            },
            "responses": {
              "calm": {
                "ar": "زرت الطابق للقاء الضيف في النهار، لقاء عمل عادي تماماً.",
                "en": "I visited the floor to meet the guest during the day, a perfectly ordinary business meeting."
              },
              "pressing": {
                "ar": "هل أصبحت زياراتي جريمة؟! أنا رجل معروف، ولا أخفي تحركاتي!",
                "en": "Have my visits become a crime?! I am a known man and hide none of my movements!"
              },
              "sympathetic": {
                "ar": "جئت أطالبه بحقي من صفقة وهمية... غادرت غاضباً نهاراً، لكنني لم أعد ليلاً أبداً.",
                "en": "I came to demand my right from a sham deal... I left angry during the day, but never returned at night."
              }
            }
          },
          {
            "id": "q_h3_floor",
            "category": "evidence",
            "text": {
              "ar": "هل دخلت جناح 704 في أي وقت؟",
              "en": "Did you enter suite 704 at any time?"
            },
            "responses": {
              "calm": {
                "ar": "دخلت نهاراً لمناقشة العمل، وهذا مسجّل عند الاستقبال.",
                "en": "I entered during the day to discuss business, and that is recorded at reception."
              },
              "pressing": {
                "ar": "لن أجيب على اتهام مباشر! إن كان لديك دليل فأرنيه!",
                "en": "I will not answer a direct accusation! If you have proof, show it!"
              },
              "sympathetic": {
                "ar": "دخلت مرة واحدة نهاراً... ورأيت على مكتبه أوراقاً تخص بطاقات الغرف، أثارت فضولي.",
                "en": "I entered once during the day... and saw on his desk papers about room cards, which stirred my curiosity."
              }
            }
          },
          {
            "id": "q_h3_shoe",
            "category": "evidence",
            "text": {
              "ar": "عثرنا على أثر حذائك قرب جثة الضيف، كيف تفسّر ذلك؟",
              "en": "We found a print of your shoe near the guest's body; how do you explain that?"
            },
            "responses": {
              "calm": {
                "ar": "أرتدي هذا الحذاء دائماً، ومن الطبيعي أن يترك أثراً في الأماكن التي أزورها.",
                "en": "I always wear these shoes, so it is natural they leave a trace where I go."
              },
              "pressing": {
                "ar": "هل كل من يملك حذاءً فاخراً قاتل؟! هذا اتهام سخيف لا يليق بمحقق!",
                "en": "Is everyone with an elegant shoe a killer?! This is an absurd accusation unworthy of an investigator!"
              },
              "sympathetic": {
                "ar": "الأثر من زيارتي النهارية... عرفت الجناح نهاراً، ولم أطأه ليلاً أبداً.",
                "en": "The print is from my daytime visit... I knew the suite by day and never set foot in it at night."
              }
            }
          }
        ]
      },
      {
        "id": "suspect_h4",
        "name": {
          "ar": "زياد العنزي",
          "en": "Ziyad Al-Anzi"
        },
        "age": 29,
        "job": {
          "ar": "موظف استقبال",
          "en": "Receptionist"
        },
        "relation": {
          "ar": "موظف استقبال في الفندق منذ أربع سنوات، ومسؤول عن نظام بطاقات الغرف",
          "en": "A receptionist at the hotel for four years, in charge of the room-card system"
        },
        "alibiWindow": {
          "start": "22:50",
          "end": "23:40"
        },
        "personality": "evasive",
        "personalityDesc": {
          "ar": "موظف استقبال هادئ المظهر لكنه مراوغ، يجيب باختصار ويتجنب التفاصيل.",
          "en": "A receptionist who appears calm but is evasive, answering briefly and avoiding details."
        },
        "secret": {
          "ar": "كان يستنسخ بطاقات الغرف الرئيسية ليسرق مقتنيات النزلاء الأثرياء، واكتشفه الضحية وهدّده بالفضح، فقتله بمهدّئ في مشروبه.",
          "en": "He was cloning master room cards to steal wealthy guests' belongings; the victim discovered it and threatened to expose him, so he killed him with a sedative in his drink."
        },
        "questions": [
          {
            "id": "q_h4_alibi",
            "category": "alibi",
            "text": {
              "ar": "أين كنت وقت اختفاء الضيف بين العاشرة والنصف والحادية عشرة والنصف؟",
              "en": "Where were you when the guest vanished between 10:30 and 11:30 PM?"
            },
            "responses": {
              "calm": {
                "ar": "كنت في مكتب الاستقبال بالبهو، أسجّل مغادرة النزلاء وأرتب ملفات الحجز.",
                "en": "I was at the reception desk in the lobby logging guest departures and arranging reservation files."
              },
              "pressing": {
                "ar": "أنا في الاستقبال طوال الوقت، الكاميرات تثبت ذلك... على الأقل التي لم تُمحَ.",
                "en": "I am at reception all the time, the cameras prove it... at least the ones that weren't erased."
              },
              "sympathetic": {
                "ar": "كانت ليلة هادئة... صعدت مرة واحدة للطابق السابع لتسليم منشفة إضافية لنزيل آخر.",
                "en": "It was a quiet night... I went up once to the seventh floor to deliver an extra towel to another guest."
              }
            }
          },
          {
            "id": "q_h4_relation",
            "category": "relation",
            "text": {
              "ar": "ما علاقتك بالضيف طلال الحربي؟",
              "en": "What is your relationship with the guest Talal Al-Harbi?"
            },
            "responses": {
              "calm": {
                "ar": "علاقة موظف بنزيل، أُسلّمه مفاتيحه وأستقبل طلباته، لا شيء أكثر.",
                "en": "An employee-to-guest relationship; I hand him his keys and take his requests, nothing more."
              },
              "pressing": {
                "ar": "لا أعرف الرجل شخصياً! لماذا تركز عليّ؟ هل لأنني ببساطة كنت في الاستقبال؟",
                "en": "I don't know the man personally! Why focus on me? Just because I happened to be at reception?"
              },
              "sympathetic": {
                "ar": "كان يسألني كثيراً عن نظام البطاقات وكيفية إصدار المفاتيح... لاحظت اهتمامه الغريب.",
                "en": "He asked me a lot about the card system and how keys are issued... I noticed his strange interest."
              }
            }
          },
          {
            "id": "q_h4_motive",
            "category": "motive",
            "text": {
              "ar": "هل كان بينك وبين الضيف أي خلاف؟",
              "en": "Was there any dispute between you and the guest?"
            },
            "responses": {
              "calm": {
                "ar": "لا خلاف إطلاقاً، نزيل عادي كغيره من مئات النزلاء.",
                "en": "No dispute at all; an ordinary guest like hundreds of others."
              },
              "pressing": {
                "ar": "لماذا تصرّ على تلفيق خلاف لي؟! لم يحدث شيء، أقول لك لا شيء!",
                "en": "Why do you insist on fabricating a dispute for me?! Nothing happened, I tell you nothing!"
              },
              "sympathetic": {
                "ar": "حسناً... تشاجرنا مرة بشأن فاتورة، لكنه أمر تافه لا يصل إلى القتل.",
                "en": "Well... we argued once over a bill, but it was trivial and never reached murder."
              }
            }
          },
          {
            "id": "q_h4_witness",
            "category": "witness",
            "text": {
              "ar": "من رأيت يدخل الطابق السابع أو يخرج منه تلك الليلة؟",
              "en": "Whom did you see enter or leave the seventh floor that night?"
            },
            "responses": {
              "calm": {
                "ar": "عاملة الغرف وعربة الخدمة، وضيف آخر نزل قرب منتصف الليل. لا شيء غير معتاد.",
                "en": "The maid and the service cart, and another guest who went down near midnight. Nothing unusual."
              },
              "pressing": {
                "ar": "لست مسؤولاً عن مراقبة النزلاء! أنا أُسجّل الحجوزات لا أطارد الناس!",
                "en": "I am not responsible for watching guests! I log reservations, I don't chase people!"
              },
              "sympathetic": {
                "ar": "رأيت هند تحمل شيئاً صغيراً... لم أعرف ما هو، ولم أسأل.",
                "en": "I saw Hind carrying something small... I didn't know what it was, and didn't ask."
              }
            }
          },
          {
            "id": "q_h4_secret",
            "category": "secret",
            "text": {
              "ar": "ماذا تخفي في فتحة التهوية بالممر؟",
              "en": "What are you hiding in the corridor vent?"
            },
            "responses": {
              "calm": {
                "ar": "فتحة التهوية؟ لا أعرف ما تتحدث عنه، ربما صيانة قديمة.",
                "en": "The vent? I don't know what you're talking about, maybe old maintenance."
              },
              "pressing": {
                "ar": "كيف عرفت عن... لا، لا شيء هناك! أنتم تلفقون الأدلة!",
                "en": "How did you know about... no, there is nothing there! You are fabricating evidence!"
              },
              "sympathetic": {
                "ar": "حسناً... هي بطاقة مفتاح احتياطية. كل موظفي الاستقبال يحتفظون بواحدة، هذا إجراء روتيني.",
                "en": "Fine... it's a spare keycard. Every receptionist keeps one; it's a routine procedure."
              }
            }
          },
          {
            "id": "q_h4_keycard",
            "category": "evidence",
            "text": {
              "ar": "من يملك صلاحية الوصول إلى البطاقات الرئيسية للأجنحة؟",
              "en": "Who has access to the master keycards for the suites?"
            },
            "responses": {
              "calm": {
                "ar": "المدير وموظفو الاستقبال فقط، وفق إجراءات صارمة موثّقة.",
                "en": "Only the manager and the receptionists, under strict documented procedures."
              },
              "pressing": {
                "ar": "هذا سؤال إداري! اذهب واسأل المدير عن أنظمته، لا أنا!",
                "en": "This is an administrative question! Go ask the manager about his systems, not me!"
              },
              "sympathetic": {
                "ar": "البطاقات الرئيسية تُحفظ في الاستقبال... وأنا أُصدر البطاقات للنزلاء يومياً.",
                "en": "Master cards are kept at reception... and I issue cards to guests daily."
              }
            }
          },
          {
            "id": "q_h4_guestdata",
            "category": "evidence",
            "text": {
              "ar": "هل اطّلعت على مقتنيات النزلاء أو بياناتهم دون إذن؟",
              "en": "Did you access guests' belongings or data without permission?"
            },
            "responses": {
              "calm": {
                "ar": "أنا أمين في عملي، ولم أمسّ مقتنيات أحد.",
                "en": "I am honest in my work and never touched anyone's belongings."
              },
              "pressing": {
                "ar": "هل تلمّح إلى أنني سارق؟! سمعتي نظيفة، وأدين بالكثير لهذا الفندق!",
                "en": "Are you insinuating I'm a thief?! My record is clean, and I owe this hotel a lot!"
              },
              "sympathetic": {
                "ar": "بعض النزلاء يتركون أشياءهم بلا حراسة... لكنني لم آخذ شيئاً، أقسم.",
                "en": "Some guests leave their things unguarded... but I took nothing, I swear."
              }
            }
          }
        ],
        "presentReactions": {
          "h01": {
            "text": {
              "ar": "يجمد زياد في مكانه وتتبدّل ملامحه: «بصمة... على المقبض من الداخل؟ مستحيل، لا أحد يلمس ذلك الجانب إلا من...» ثم يصمت فجأة.",
              "en": "Ziyad freezes, his expression shifting: 'A print... on the inner handle? Impossible, no one touches that side except whoever...' then he falls abruptly silent."
            },
            "unlockQuestion": {
              "id": "q_h4_unlocked_denial",
              "category": "secret",
              "text": {
                "ar": "لماذا ذكرت أن أحداً لا يلمس الجانب الداخلي للمقبض؟",
                "en": "Why did you say no one touches the inner side of the handle?"
              },
              "responses": {
                "calm": {
                  "ar": "قصدت... أن النزلاء يفتحون من الخارج عادةً، هذا كل شيء.",
                  "en": "I meant... guests usually open from the outside, that's all."
                },
                "pressing": {
                  "ar": "لا تحاول تحريف كلامي! أنا أتحدث عن الإجراءات المعتادة فحسب!",
                  "en": "Don't twist my words! I am only talking about standard procedures!"
                },
                "sympathetic": {
                  "ar": "لأنني... أعرف كيف يعمل هذا الباب جيداً. أنا أُصلحه أحياناً. لا شيء أكثر، أرجوك.",
                  "en": "Because I... know how this door works well. I fix it sometimes. Nothing more, please."
                }
              }
            }
          },
          "h02": {
            "text": {
              "ar": "يشحب وجه زياد تماماً: «بطاقة مفتاح... لا، هذا غير ممكن، أنا أُصدر البطاقات فقط ولا أحتفظ بنسخ منها.»",
              "en": "Ziyad's face goes completely pale: 'A keycard... no, this is impossible; I only issue cards and keep no copies.'"
            }
          },
          "h04": {
            "text": {
              "ar": "يحدق زياد في القارورة ويداه ترتجفان: «هذه... لا تخصني! وجدتها في الممر وأنا أنظف مكتب الاستقبال...» ثم يدرك أن اعترافه بالعثور عليها يورطه.",
              "en": "Ziyad stares at the vial, hands trembling: 'This... isn't mine! I found it in the corridor while cleaning the reception desk...' then he realizes that admitting he found it incriminates him."
            }
          }
        }
      },
      {
        "id": "suspect_h5",
        "name": {
          "ar": "ماجد القحطاني",
          "en": "Majed Al-Qahtani"
        },
        "age": 45,
        "job": {
          "ar": "شريك الضحية في التجارة",
          "en": "Victim's Business Partner"
        },
        "relation": {
          "ar": "شريك الضحية في عدة صفقات تجارية",
          "en": "The victim's partner in several business deals"
        },
        "alibiWindow": {
          "start": "20:30",
          "end": "21:30"
        },
        "personality": "ruthless",
        "personalityDesc": {
          "ar": "رجل أعمال بارد وقاسٍ، لا يتردد في تصفية حساباته بأي وسيلة كانت.",
          "en": "A cold, ruthless businessman who never hesitates to settle his scores by any means."
        },
        "secret": {
          "ar": "اكتشف الضحية أنه يستولي على نصيبه من أرباح الشركة، وكانا على خلاف مالي حاد.",
          "en": "The victim had discovered he was embezzling his share of the company profits, and they were in a sharp financial dispute."
        },
        "questions": [
          {
            "id": "q_h5_alibi",
            "category": "alibi",
            "text": {
              "ar": "أين كنت وقت اختفاء الضيف؟",
              "en": "Where were you when the guest vanished?"
            },
            "responses": {
              "calm": {
                "ar": "كنت في مطعم الفندق مع أحد شركائي حتى العاشرة، ثم غادرت الفندق.",
                "en": "I was in the hotel restaurant with a partner until ten, then left the hotel."
              },
              "pressing": {
                "ar": "هل صار العشاء في مطعم الفندق تهمة؟! غادرت قبل الحادثة بساعة كاملة!",
                "en": "Has dinner at the hotel restaurant become a crime?! I left a full hour before the incident!"
              },
              "sympathetic": {
                "ar": "كانت ليلة عادية... عشاء عمل ثم عدت إلى منزلي، لم أرَ الضيف حتى.",
                "en": "It was an ordinary night... a business dinner then home; I didn't even see the guest."
              }
            }
          },
          {
            "id": "q_h5_relation",
            "category": "relation",
            "text": {
              "ar": "ما طبيعة شراكتك مع طلال الحربي؟",
              "en": "What is the nature of your partnership with Talal Al-Harbi?"
            },
            "responses": {
              "calm": {
                "ar": "شراكة تجارية عمرها سنوات في عدة صفقات، كانت تسير بشكل مقبول.",
                "en": "A years-long business partnership in several deals, proceeding acceptably."
              },
              "pressing": {
                "ar": "شراكتنا شأن خاص! لن أشرح أموالي وصفقاتي لمحقق!",
                "en": "Our partnership is a private matter! I will not explain my money and deals to an investigator!"
              },
              "sympathetic": {
                "ar": "كنا مقربين أياماً... ثم بدأ يشك فيّ ويتهمني بأخذ نصيبه، وهذا آلمني.",
                "en": "We were close once... then he began to suspect me and accuse me of taking his share, which hurt me."
              }
            }
          },
          {
            "id": "q_h5_motive",
            "category": "motive",
            "text": {
              "ar": "هل كان بينكما خلاف مالي كبير؟",
              "en": "Was there a major financial dispute between you?"
            },
            "responses": {
              "calm": {
                "ar": "خلافات الشراكة تُحلّ في المحاكم لا في الأجنحة الفندقية.",
                "en": "Partnership disputes are settled in courts, not hotel suites."
              },
              "pressing": {
                "ar": "كل الشركاء يتخاصمون على المال! هذا لا يجعلني قاتلاً! كف عن هذا الهراء!",
                "en": "All partners quarrel over money! That doesn't make me a killer! Stop this nonsense!"
              },
              "sympathetic": {
                "ar": "نعم، اتهمني بسرقة نصيبه وهدّدني بالقضاء... لكنني رجل أعمال، أقتل بالعقود لا بالمهدّئات.",
                "en": "Yes, he accused me of stealing his share and threatened legal action... but I am a businessman; I kill with contracts, not sedatives."
              }
            }
          },
          {
            "id": "q_h5_witness",
            "category": "witness",
            "text": {
              "ar": "هل لاحظت أحداً يهتم بالضيف أو يراقبه؟",
              "en": "Did you notice anyone interested in or watching the guest?"
            },
            "responses": {
              "calm": {
                "ar": "رأيته يتحدث مراراً مع موظف الاستقبال في البهو، وكان النقاش حاداً.",
                "en": "I saw him talking repeatedly with the receptionist in the lobby, and the discussion was tense."
              },
              "pressing": {
                "ar": "لست مراقباً! لكن ذلك الموظف زياد كان يلاحق طلال في كل مكان!",
                "en": "I am not a watcher! But that employee Ziyad followed Talal everywhere!"
              },
              "sympathetic": {
                "ar": "لاحظت توتراً غريباً بين طلال وموظف الاستقبال... وكأن بينهما سراً خطيراً.",
                "en": "I noticed a strange tension between Talal and the receptionist... as if they shared a dangerous secret."
              }
            }
          },
          {
            "id": "q_h5_secret",
            "category": "secret",
            "text": {
              "ar": "ماذا كنت تخفي عنا بشأن خلافك مع الضيف؟",
              "en": "What were you hiding about your dispute with the victim?"
            },
            "responses": {
              "calm": {
                "ar": "لا أخفي شيئاً، كل تعاملاتنا موثّقة في العقود.",
                "en": "I hide nothing; all our dealings are documented in contracts."
              },
              "pressing": {
                "ar": "لن أفتح دفاتري لك! ابحث عن دليل حقيقي بدل التخمين!",
                "en": "I will not open my books to you! Find real evidence instead of guessing!"
              },
              "sympathetic": {
                "ar": "كان قد اكتشف أنني أخذت نصيباً زائداً من الأرباح... فهدّدني بالفضح، وتشاجرنا بشدة.",
                "en": "He had discovered I took an extra share of the profits... he threatened to expose me, and we argued fiercely."
              }
            }
          },
          {
            "id": "q_h5_bill",
            "category": "evidence",
            "text": {
              "ar": "ما قصة الخصم الغامض في فاتورة إقامة الضيف؟",
              "en": "What is the story of the mysterious discount on the guest's hotel bill?"
            },
            "responses": {
              "calm": {
                "ar": "تسوية مالية معتادة بين شريكين، وُثّقت لاحقاً في الحسابات.",
                "en": "An ordinary financial settlement between partners, later documented in the accounts."
              },
              "pressing": {
                "ar": "هل صار كل خصم في فاتورة دليلاً جنائياً؟! هذا عبث!",
                "en": "Has every bill discount become criminal evidence?! This is absurd!"
              },
              "sympathetic": {
                "ar": "الخصم كان مقابل مبلغ كان يدين لي به... خلاف مالي بحت، لا علاقة له بموته.",
                "en": "The discount was against a sum he owed me... a purely financial dispute, unrelated to his death."
              }
            }
          },
          {
            "id": "q_h5_threat",
            "category": "evidence",
            "text": {
              "ar": "عثرنا على رسالة تهديد بخط يدك بين ملابس الضيف، ما تفسيرك؟",
              "en": "We found a handwritten threat note in the victim's clothes; what is your explanation?"
            },
            "responses": {
              "calm": {
                "ar": "خط اليد يشبه خطي لكن الرسالة ليست مني، ربما زوّرها أحد لإبعاد الشبهة عن نفسه.",
                "en": "The handwriting resembles mine, but the note is not from me; someone may have forged it to divert suspicion."
              },
              "pressing": {
                "ar": "هذا تلفيق! من وضعها هناك يريد أن يورطني! أنا لم أكتب أي تهديد!",
                "en": "This is fabrication! Whoever planted it wants to frame me! I wrote no threat!"
              },
              "sympathetic": {
                "ar": "حسناً... أنا كتبتها في لحظة غضب، لكنني لم أضعها في حقيبته ولم أقتله، أقسم.",
                "en": "Fine... I wrote it in a moment of anger, but I never placed it in his bag and never killed him, I swear."
              }
            }
          }
        ],
        "presentReactions": {
          "h06": {
            "text": {
              "ar": "يقطّب ماجد بامتعاض: «رسالة التهديد؟ نعم، كتبتها حين رفض إعادة حقي... لكن من وضعها في حقيبته يريد إدانتي. ابحثوا عمّن كان يدخل الجناح بحرية.»",
              "en": "Majed frowns with distaste: 'The threat note? Yes, I wrote it when he refused to return my money... but whoever placed it in his bag wants me convicted. Look for whoever could enter the suite freely.'"
            },
            "unlockQuestion": {
              "id": "q_h5_unlocked_threat",
              "category": "secret",
              "text": {
                "ar": "من كان يستطيع دخول جناح 704 بحرية دون أن يثير الشك؟",
                "en": "Who could enter suite 704 freely without raising suspicion?"
              },
              "responses": {
                "calm": {
                  "ar": "موظفو الاستقبال وحدهم يملكون بطاقات تفتح كل الأجنحة.",
                  "en": "Only receptionists hold cards that open every suite."
                },
                "pressing": {
                  "ar": "اسألوا الاستقبال! ليس أنا من يملك مفاتيح الغرف!",
                  "en": "Ask reception! I am not the one with the room keys!"
                },
                "sympathetic": {
                  "ar": "سمعت من أحد النزلاء أن موظفاً في الاستقبال كان يفتح الأجنحة ليلاً... هذا كل ما أعرفه.",
                  "en": "I heard from a guest that a receptionist was opening suites at night... that is all I know."
                }
              }
            }
          }
        }
      }
    ]
  },
  {
    "id": "case_004",
    "killerId": "suspect_f1",
    "sceneId": "factory",
    "pressingCooperationMultiplier": 1.5,
    "motiveOptions": {
      "correctId": "motive_safety_coverup",
      "options": [
        {
          "id": "motive_theft",
          "text": {
            "ar": "سرقة قطع النحاس والمحركات من المخزن وبيعها لسداد ديون متراكمة",
            "en": "Stealing copper parts and motors from the warehouse to pay mounting debts"
          }
        },
        {
          "id": "motive_safety_coverup",
          "text": {
            "ar": "إسكات مدير الإنتاج بعد اكتشافها تعطيل أنظمة الأمان وتزوير سجل الأعطال",
            "en": "Silencing the production manager after he discovered her safety-system bypasses and falsified fault logs"
          }
        },
        {
          "id": "motive_revenge",
          "text": {
            "ar": "الانتقام من المدير لأنه حمّلها مسؤولية حادث قديم وأوقف ترقيتها",
            "en": "Revenge against the manager for blaming her for an old accident and blocking her promotion"
          }
        }
      ]
    },
    "endings": {
      "full": {
        "title": {
          "ar": "ما قبل الإنذار",
          "en": "Before the Alarm"
        },
        "text": {
          "ar": "أثبت تقرير الوصول إلى سجل التحكم، وأثر أداة المعايرة، وموضع الضربة أن ليلى ناصر قتلت فارس منصور قبل الحريق، ثم أحرقت مخزن المذيبات لتبدو الوفاة نتيجة حادث صناعي. واجهت المدير بعدما اكتشف تجاوزها لقواطع الأمان وتلاعبها بسجلات الأعطال؛ وحين رفض التستر عليها ضربته بمفتاح المعايرة وأطلقت الحريق من دائرة تأخير. أما البصمة والحذاء والفاتورة التي دفعت التحقيق إلى طرق خاطئة، فقد كانت آثاراً عادية أو حوادث منفصلة. أُغلقت القضية، وبقي المصنع شاهداً على أن ترتيب الأدلة أهم من أول تفسير لها.",
          "en": "The access-log recovery, calibration-tool mark, and impact location proved that Layla Nasser killed Faris Mansour before the fire, then burned the solvent store to make the death look like an industrial accident. She confronted the manager after he discovered her safety-breaker bypasses and altered fault logs; when he refused to cover for her, she struck him with a calibration wrench and triggered the fire through a delay circuit. The boot print, residue, and invoice that sent the investigation down false paths were ordinary traces or unrelated incidents. The case was closed, leaving the factory as a reminder that evidence must be ordered before it is interpreted."
        }
      },
      "partial": {
        "title": {
          "ar": "شرارة من الحقيقة",
          "en": "A Spark of the Truth"
        },
        "text": {
          "ar": "اتهامك كشف خللاً في المصنع، لكنك لم تفصل بين الحريق والجريمة التي سبقته. تمسكت هيئة الدفاع بأثر الحذاء ونتيجة المذيبات الملتبسة، بينما بقي سجل الدخول المستعاد ونافذة الوفاة بلا تفسير مكتمل. أُعيد التحقيق وبقيت نجمة واحدة في سجلك؛ فالحريق أخفى المشهد، لكنه لم يمحُ التسلسل الزمني.",
          "en": "Your accusation exposed wrongdoing at the factory, but you failed to separate the fire from the murder that came first. The defense focused on the ambiguous boot print and solvent report, while the recovered access log and death window remained unexplained. The investigation was reopened and one star remained on your record: the fire obscured the scene, but it did not erase the timeline."
        }
      },
      "innocent": {
        "title": {
          "ar": "اتهام وسط الدخان",
          "en": "An Accusation in the Smoke"
        },
        "text": {
          "ar": "انهار المشتبه فيه الذي اتهمته، وكشف سراً حقيقياً عن التلاعب بالمخزن، لكنه لم يقتل فارس منصور. بينما انشغل التحقيق بذلك السر، غادرت ليلى المصنع قبل أن تُربط سجلات الدخول بأداة المعايرة. ظل سبب الحريق معروفاً، أما جريمة ما قبل الإنذار فبقيت مفتوحة في ملفك.",
          "en": "The suspect you accused broke down and revealed a real secret about warehouse tampering, but did not kill Faris Mansour. While the investigation focused on that secret, Layla left the factory before the access logs could be tied to the calibration tool. The fire's origin was known, but the murder before the alarm remained open in your file."
        }
      }
    },
    "title": {
      "ar": "حريق قبل الصافرة",
      "en": "Fire Before the Siren"
    },
    "intro": {
      "ar": "اندلع حريق عنيف في مصنع المدار للمضخات بعد انتهاء الوردية، ووجد رجال الإطفاء مدير الإنتاج فارس منصور ميتاً قرب خط الضغط الرابع. بدا المشهد أولاً كأنه حادث بسبب تماس كهربائي، لكن موضع إصابته لا ينسجم مع سقوط آلة، وسجل الإنذار انقطع لدقائق. هل قتلته النار، أم أن أحدهم أشعلها بعد جريمة أخرى؟",
      "en": "A violent fire broke out at Al-Madar Pump Works after the shift ended, and firefighters found production manager Faris Mansour dead beside Press Line Four. At first the scene looked like an electrical accident, but his injury did not fit a machine fall and the alarm log had a gap. Did the fire kill him, or did someone light it after another crime?"
    },
    "victim": {
      "name": {
        "ar": "فارس منصور",
        "en": "Faris Mansour"
      },
      "description": {
        "ar": "مدير إنتاج في السابعة والأربعين، أمضى عشرين عاماً في المصنع وكان يراجع بنفسه تقارير السلامة قبل اعتماد أي وردية.",
        "en": "A 47-year-old production manager who spent twenty years at the factory and personally reviewed safety reports before approving each shift."
      },
      "placeOfDeath": {
        "ar": "ممر خط الضغط الرابع بين لوحة التحكم ومنضدة المعايرة",
        "en": "The aisle of Press Line Four, between the control panel and calibration bench"
      },
      "timeOfDeath": {
        "ar": "بين 20:40 و21:05، قبل بدء الحريق الذي أطلق الإنذار عند 21:27",
        "en": "Between 8:40 and 9:05 PM, before the fire triggered the alarm at 9:27 PM"
      }
    },
    "autopsy": {
      "cause": {
        "ar": "ضربة واحدة بأداة معدنية ثقيلة إلى الصدغ الأيسر سببت كسراً ونزيفاً قاتلاً. لا توجد إصابة قاتلة ناتجة عن الحريق.",
        "en": "A single blow from a heavy metal tool to the left temple caused a fatal fracture and hemorrhage. The fire caused no fatal injury."
      },
      "deathWindow": {
        "start": "20:40",
        "end": "21:05"
      },
      "findings": [
        {
          "ar": "الرئتان خاليتان تقريباً من السخام، ونسبة أول أكسيد الكربون منخفضة جداً؛ كان فارس ميتاً قبل وصول الدخان إليه.",
          "en": "The lungs contain almost no soot and carbon monoxide is extremely low; Faris was dead before smoke reached him."
        },
        {
          "ar": "موضع النزف واتجاه الضربة يشيران إلى أداة قصيرة ذات حافة مستديرة، لا إلى جزء سقط من مكبس المصنع.",
          "en": "The hemorrhage and strike angle indicate a short tool with a rounded edge, not a part falling from the factory press."
        },
        {
          "ar": "حرارة الجثة وتيبسها يحددان نافذة الوفاة بين 20:40 و21:05، بينما سجل الحساسات يثبت أن الحريق بدأ عند 21:27.",
          "en": "Body temperature and rigor place death between 8:40 and 9:05 PM, while the sensor log confirms the fire began at 9:27 PM."
        },
        {
          "ar": "آثار مادة إطفاء على الكم ليست من الحريق؛ إنها من فحص سلامة روتيني سابق، ما يجعلها قرينة زمنية مضللة.",
          "en": "The extinguisher residue on the sleeve is not from the fire; it came from an earlier routine safety check, making it a misleading time clue."
        }
      ]
    },
    "location": {
      "name": {
        "ar": "مصنع المدار للمضخات",
        "en": "Al-Madar Pump Works"
      },
      "description": {
        "ar": "مصنع واسع من طابق واحد، تتقاطع فيه خطوط الإنتاج مع ممرات الصيانة، ويتصل مخزن المذيبات بساحة التحميل عبر ممر جانبي.",
        "en": "A sprawling single-story factory where production lines cross maintenance aisles, with the solvent store linked to the loading yard by a side passage."
      }
    },
    "scene": [
      {
        "id": "point_factory_control",
        "name": {
          "ar": "لوحة إنذار المصنع",
          "en": "Factory Alarm Panel"
        },
        "desc": {
          "ar": "شاشة متفحمة قرب خط الإنتاج؛ سجلها الورقي يحمل فجوة زمنية عند بدء الحريق.",
          "en": "A scorched display by the production line; its paper log has a time gap when the fire began."
        },
        "x": 72,
        "y": 28,
        "clueId": "f01"
      },
      {
        "id": "point_factory_boot",
        "name": {
          "ar": "أثر حذاء في الممر",
          "en": "Boot Print in the Aisle"
        },
        "desc": {
          "ar": "طبعة حذاء عميقة على غبار الأرضية بجانب خط الضغط، وبالقرب منها ألياف من نعل صناعي.",
          "en": "A deep boot impression in the floor dust beside the press line, with fibers from an industrial sole nearby."
        },
        "x": 38,
        "y": 62,
        "clueId": "f02"
      },
      {
        "id": "point_factory_desk",
        "name": {
          "ar": "مكتب سجل السلامة",
          "en": "Safety Log Desk"
        },
        "desc": {
          "ar": "مكتب صغير في غرفة المشرفين عليه تصريح تجاوز أمان ممزق.",
          "en": "A small desk in the supervisors' room holding a torn safety-bypass permit."
        },
        "x": 16,
        "y": 32,
        "clueId": "f03"
      },
      {
        "id": "point_factory_press",
        "name": {
          "ar": "مكبس خط الإنتاج",
          "en": "Production Press"
        },
        "desc": {
          "ar": "مكبس متوقف قرب موضع الجثة؛ على حافته أثر نصف دائري حديث.",
          "en": "A stopped press near the body; a fresh semicircular mark is visible on its edge."
        },
        "x": 50,
        "y": 47,
        "clueId": "f04"
      },
      {
        "id": "point_factory_aisle",
        "name": {
          "ar": "ممر الصيانة الشمالي",
          "en": "North Maintenance Aisle"
        },
        "desc": {
          "ar": "بقعة لامعة على الأرض قرب باب الصيانة، ورائحتها تشبه زيت التبريد.",
          "en": "A glossy patch by the maintenance door, smelling faintly of cooling oil."
        },
        "x": 64,
        "y": 70,
        "clueId": "f05"
      },
      {
        "id": "point_factory_store",
        "name": {
          "ar": "باب مخزن المواد",
          "en": "Materials Store Door"
        },
        "desc": {
          "ar": "باب المخزن مفتوح جزئياً؛ سقطت بجواره فاتورة لمادة مقاومة للاشتعال.",
          "en": "The store door is partly open; an invoice for fire-retardant material lies beside it."
        },
        "x": 88,
        "y": 42,
        "clueId": "f06"
      },
      {
        "id": "point_factory_radio",
        "name": {
          "ar": "قاعدة جهاز اللاسلكي",
          "en": "Radio Dock"
        },
        "desc": {
          "ar": "قاعدة لاسلكي عند مدخل الممر؛ يحتفظ الجهاز بآخر رسالة مسجلة.",
          "en": "A radio dock at the aisle entrance; the handset retains its last recorded message."
        },
        "x": 18,
        "y": 66,
        "clueId": "f07"
      },
      {
        "id": "point_factory_crawlspace",
        "name": {
          "ar": "فتحة أسفل منصة الكابلات",
          "en": "Cable-Platform Crawlspace"
        },
        "desc": {
          "ar": "فراغ ضيق أسفل منصة الكابلات يخفي غطاء مرحل منصهر.",
          "en": "A narrow space beneath the cable platform conceals a melted relay cap."
        },
        "x": 46,
        "y": 78,
        "clueId": "f08",
        "hiddenUntil": {
          "suspectId": "suspect_f4",
          "questionId": "q_f4_secret"
        }
      },
      {
        "id": "point_factory_tool_locker",
        "name": {
          "ar": "خزانة أدوات المعايرة",
          "en": "Calibration-Tool Locker"
        },
        "desc": {
          "ar": "خزانة ضيقة خلف عمود الإنتاج، فيها قصاصة تهديد مخبأة خلف قائمة الأدوات.",
          "en": "A narrow locker behind a production pillar, with a threat note hidden behind the tool inventory."
        },
        "x": 79,
        "y": 19,
        "clueId": "f09",
        "hiddenUntil": {
          "suspectId": "suspect_f1",
          "questionId": "q_f1_secret"
        }
      },
      {
        "id": "point_body",
        "name": {
          "ar": "جثة مدير الإنتاج",
          "en": "Production Manager's Body"
        },
        "desc": {
          "ar": "جثة فارس منصور ممددة على أرض المصنع بجوار خط الضغط الرابع ومنضدة المعايرة. تفتيش موضع الجثة يتيح تقرير الطب الشرعي.",
          "en": "Faris Mansour's body lies on the factory floor beside Press Line Four and the calibration bench. Examining the body unlocks the autopsy report."
        },
        "x": 54,
        "y": 86,
        "clueId": null
      }
    ],
    "clues": [
      {
        "id": "f01",
        "name": {
          "ar": "فجوة سجل الإنذار",
          "en": "Alarm-Log Gap"
        },
        "desc": {
          "ar": "سجل يدوي يثبت انقطاع تحديثات لوحة الإنذار بين 21:24 و21:31، بينما بدأت حساسات الحرارة بالارتفاع عند 21:27.",
          "en": "A handwritten log shows the alarm panel stopped updating from 9:24 to 9:31 PM, while heat sensors began rising at 9:27."
        },
        "type": "document",
        "importance": "important",
        "suspectIds": [
          "suspect_f1",
          "suspect_f2"
        ]
      },
      {
        "id": "f02",
        "name": {
          "ar": "طبعة الحذاء الصناعي",
          "en": "Industrial Boot Print"
        },
        "desc": {
          "ar": "طبعة مقاس 44 قرب خط الضغط تشبه حذاء الفني سامي، لكنها لا تحتوي على علامة مميزة.",
          "en": "A size-44 print by the press resembles technician Sami's boot, but carries no unique tread mark."
        },
        "type": "trace",
        "importance": "misleading",
        "suspectIds": [
          "suspect_f4"
        ],
        "analyzable": true,
        "labType": "trace",
        "certainty": "medium",
        "misleading": true,
        "labResult": {
          "ar": "تُباع هذه الطبعة لمئات عمال المصنع؛ لا يمكن ربطها بسامي أو بزمن الجريمة. إنها أثر مضلل ناتج عن حركة الوردية.",
          "en": "This sole pattern is issued to hundreds of factory workers; it cannot be tied to Sami or the time of the crime. It is a misleading trace from normal shift traffic."
        }
      },
      {
        "id": "f03",
        "name": {
          "ar": "تصريح تجاوز الأمان الممزق",
          "en": "Torn Safety-Bypass Permit"
        },
        "desc": {
          "ar": "تصريح يجيز تعطيل قاطع خط الضغط الرابع، وعليه توقيع يبدو أنه توقيع فارس، لكن طبقة الحبر مختلفة عند اسم المعتمد.",
          "en": "A permit authorizing a bypass of Press Line Four's safety breaker; the signature looks like Faris's, but the ink layer differs around the approver's name."
        },
        "type": "document",
        "importance": "important",
        "suspectIds": [
          "suspect_f1",
          "suspect_f3"
        ],
        "analyzable": true,
        "labType": "document",
        "labSeed": 48127,
        "certainty": "high",
        "paperText": {
          "ar": "تصريح تجاوز الأمان — خط الضغط الرابع. تعطيل مؤقت لقاطع السلامة حتى نهاية الوردية. المعتمد: فارس منصور. ملاحظة بخط مختلف: تمت المراجعة مساء اليوم، الساعة 20:52.",
          "en": "Safety Bypass Permit — Press Line Four. Temporarily disable the safety breaker until the end of the shift. Approved by: Faris Mansour. A note in different handwriting says it was reviewed at 8:52 PM."
        },
        "labSuspectIds": [
          "suspect_f1"
        ],
        "labResult": {
          "ar": "الاسم أضيف بعد التوقيع، والتصريح عُدّل من محطة المهندسة ليلى. استعادة سجل التعديل الرقمي تكشف بطاقة الدخول L-17 في الساعة 20:52.",
          "en": "The name was added after the signature, and the permit was altered at engineer Layla's terminal. Recovering the edit log reveals access card L-17 at 8:52 PM."
        },
        "recoveredClue": {
          "id": "f10",
          "name": {
            "ar": "سجل الوصول المستعاد",
            "en": "Recovered Access Log"
          },
          "desc": {
            "ar": "نسخة مخبرية من سجل المحطة تثبت أن بطاقة L-17 استخدمت عند لوحة مرحل خط الضغط من 20:49 إلى 20:54، ثم مُسح السطر الأصلي.",
            "en": "A lab-recovered terminal log shows card L-17 was used at the Press Line relay panel from 8:49 to 8:54 PM, after which the original entry was erased."
          },
          "type": "document",
          "importance": "crucial",
          "suspectIds": [
            "suspect_f1"
          ]
        }
      },
      {
        "id": "f04",
        "name": {
          "ar": "أثر مفتاح المعايرة",
          "en": "Calibration-Wrench Mark"
        },
        "desc": {
          "ar": "أثر نصف دائري على إصابة فارس يطابق رأس مفتاح معايرة قصير تستخدمه مهندسة الكهرباء لضبط مرحلات الخط.",
          "en": "A semicircular mark on Faris's injury matches the head of a short calibration wrench used by the electrical engineer to tune line relays."
        },
        "type": "trace",
        "importance": "crucial",
        "suspectIds": [
          "suspect_f1"
        ],
        "presentReactions": {
          "suspect_f1": {
            "text": {
              "ar": "تتصلب ليلى: «هذا المفتاح لا يغادر حقيبتي... وربما مرّ به فارس أثناء فحص الخط.»",
              "en": "Layla stiffens: 'That wrench never leaves my kit... Faris may have handled it during a line inspection.'"
            }
          }
        }
      },
      {
        "id": "f05",
        "name": {
          "ar": "لطخة زيت التبريد",
          "en": "Cooling-Oil Smear"
        },
        "desc": {
          "ar": "زيت أخضر على الممر الشمالي، من النوع المستخدم في ورشة الصيانة ويبدو للوهلة الأولى أنه يقود إلى الفني سامي.",
          "en": "Green oil on the north aisle, the type used in the maintenance shop and seemingly pointing to technician Sami."
        },
        "type": "trace",
        "importance": "misleading",
        "suspectIds": [
          "suspect_f4"
        ]
      },
      {
        "id": "f06",
        "name": {
          "ar": "فاتورة المادة المقاومة للاشتعال",
          "en": "Fire-Retardant Invoice"
        },
        "desc": {
          "ar": "فاتورة توريد تحمل اعتماد مديرة المشتريات مريم، وتظهر نقصاً في مادة عزل استُخدمت قرب مخزن المذيبات.",
          "en": "A supply invoice approved by procurement director Mariam shows a shortage of insulating material used near the solvent store."
        },
        "type": "document",
        "importance": "misleading",
        "suspectIds": [
          "suspect_f3"
        ],
        "analyzable": true,
        "labType": "document",
        "labSeed": 92461,
        "certainty": "medium",
        "misleading": true,
        "paperText": {
          "ar": "فاتورة توريد رقم 4481 — مادة عزل مقاومة للاشتعال. الكمية المستلمة: 12 عبوة من أصل 30. اعتماد المشتريات: مريم. موقع الاستخدام المسجل: مبنى التعبئة، قبل الحريق بثلاثة أسابيع.",
          "en": "Supply Invoice 4481 — Fire-retardant insulation. Quantity received: 12 of 30 containers. Procurement approval: Mariam. Recorded use: the packaging building, three weeks before the fire."
        },
        "labResult": {
          "ar": "الدفعة الناقصة سُجلت قبل الحريق بثلاثة أسابيع، واستُخدمت في مبنى آخر؛ لا صلة لها بمخزن المذيبات ليلة الوفاة. اتهام مريم هنا مضلل.",
          "en": "The missing batch was recorded three weeks before the fire and used in another building; it is unrelated to the solvent store on the night of death. The lead against Mariam is misleading."
        }
      },
      {
        "id": "f07",
        "name": {
          "ar": "رسالة لاسلكية معادة",
          "en": "Repeated Radio Message"
        },
        "desc": {
          "ar": "رسالة بصوت فارس عند 20:56 تقول «أوقفوا الخط الرابع»؛ اختلاف صفارة الخلفية يكشف أنها تسجيل قديم أُعيد بثه.",
          "en": "A message in Faris's voice at 8:56 PM says 'Shut down Line Four'; a different background whistle reveals it was an old recording replayed."
        },
        "type": "document",
        "importance": "important",
        "suspectIds": [
          "suspect_f2",
          "suspect_f5"
        ]
      },
      {
        "id": "f08",
        "name": {
          "ar": "غطاء المرحل المنصهر",
          "en": "Melted Relay Cap"
        },
        "desc": {
          "ar": "غطاء مرحل مخفي أسفل منصة الكابلات، عليه شق ضبط مطابق للأداة التي تحملها ليلى، وآثار حرارة بدأت قبل اشتعال المخزن.",
          "en": "A relay cap hidden beneath the cable platform bears an adjustment notch matching Layla's tool, with heat damage that began before the store fire."
        },
        "type": "trace",
        "importance": "crucial",
        "suspectIds": [
          "suspect_f1"
        ],
        "presentReactions": {
          "suspect_f1": {
            "text": {
              "ar": "تتراجع ليلى خطوة: «غطاء مرحل؟ ربما أزاحه عامل أثناء الإخلاء... لم ألمسه.»",
              "en": "Layla steps back: 'A relay cap? A worker may have dislodged it during evacuation... I never touched it.'"
            }
          }
        }
      },
      {
        "id": "f09",
        "name": {
          "ar": "قصاصة تهديد في خزانة الأدوات",
          "en": "Threat Note in the Tool Locker"
        },
        "desc": {
          "ar": "قصاصة بخط مشرف الوردية عمر: «سأجعلك تدفع ثمن إغلاق الخط»، لكنها لا تحدد متى كُتبت أو لمن وُجهت.",
          "en": "A scrap in shift supervisor Omar's handwriting reads, 'You'll pay for shutting the line down,' but gives no date or recipient."
        },
        "type": "message",
        "importance": "misleading",
        "suspectIds": [
          "suspect_f2"
        ],
        "presentReactions": {
          "suspect_f2": {
            "text": {
              "ar": "يعترف عمر بحدة: «كتبتها بعد خلاف على مكافأة الوردية، لا علاقة لها بفارس أو بالحريق.»",
              "en": "Omar admits sharply: 'I wrote it after an argument about shift bonuses; it has nothing to do with Faris or the fire.'"
            }
          }
        }
      },
      {
        "id": "f10",
        "name": {
          "ar": "سجل الوصول المستعاد",
          "en": "Recovered Access Log"
        },
        "desc": {
          "ar": "نسخة مخبرية من سجل المحطة تثبت أن بطاقة L-17 استخدمت عند لوحة مرحل خط الضغط من 20:49 إلى 20:54، ثم مُسح السطر الأصلي.",
          "en": "A lab-recovered terminal log shows card L-17 was used at the Press Line relay panel from 8:49 to 8:54 PM, after which the original entry was erased."
        },
        "type": "document",
        "importance": "crucial",
        "suspectIds": [
          "suspect_f1"
        ],
        "presentReactions": {
          "suspect_f1": {
            "text": {
              "ar": "تشيح ليلى بنظرها: «أستخدم البطاقة للصيانة... وجودها في السجل لا يثبت أنني كنت قرب فارس.»",
              "en": "Layla looks away: 'I use that card for maintenance... its presence in the log does not prove I was near Faris.'"
            }
          }
        }
      }
    ],
    "suspects": [
      {
        "id": "suspect_f1",
        "name": {
          "ar": "ليلى ناصر",
          "en": "Layla Nasser"
        },
        "age": 38,
        "job": {
          "ar": "مهندسة كهرباء وتحكم",
          "en": "Electrical and Controls Engineer"
        },
        "relation": {
          "ar": "كانت مسؤولة عن مرحلات خطوط الإنتاج وتقارير تجاوز الأمان",
          "en": "Maintained production-line relays and safety-bypass reports"
        },
        "alibiWindow": {
          "start": "20:35",
          "end": "21:20"
        },
        "personality": "evasive",
        "personalityDesc": {
          "ar": "ذكية ومتحفظة، تحوّل كل سؤال إلى نقاش تقني وتخشى أن يلمس أحد أدواتها.",
          "en": "Clever and guarded, she turns every question into a technical debate and hates anyone touching her tools."
        },
        "secret": {
          "ar": "استخدمت بطاقة L-17 لتجاوز قاطع الأمان، وعدلت التصريح بعد أن رفض فارس اعتماد التغيير.",
          "en": "She used card L-17 to bypass a safety breaker and altered the permit after Faris refused to approve the change."
        },
        "questions": [
          {
            "id": "q_f1_alibi",
            "category": "alibi",
            "text": {"ar": "أين كنت بين 20:40 و21:05؟", "en": "Where were you between 8:40 and 9:05 PM?"},
            "responses": {
              "calm": {"ar": "في غرفة التحكم أراجع إنذاراً متقطعاً، وحدي تقريباً.", "en": "In the control room checking an intermittent alarm, mostly alone."},
              "pressing": {"ar": "لا أستطيع إثبات كل دقيقة، لكن لا تخلطوا الصيانة بالجريمة.", "en": "I cannot prove every minute, but do not confuse maintenance with murder."},
              "sympathetic": {"ar": "كنت أحاول فهم خلل الإنذار؛ لم أكن أريد أن يتعرض أحد للخطر.", "en": "I was trying to understand the alarm fault; I did not want anyone in danger."}
            }
          },
          {
            "id": "q_f1_relation",
            "category": "relation",
            "text": {"ar": "كيف كانت علاقتك بفارس منصور؟", "en": "What was your relationship with Faris Mansour?"},
            "responses": {
              "calm": {"ar": "كان مديري ويطلب مني مراجعة كل تغيير قبل تشغيل الخط.", "en": "He was my manager and required me to review every change before a line ran."},
              "pressing": {"ar": "كان يتدخل في عملي ثم يلومني على كل عطل.", "en": "He interfered with my work, then blamed me for every fault."},
              "sympathetic": {"ar": "احترم خبرته، لكننا اختلفنا كثيراً حول سرعة الإنتاج والسلامة.", "en": "I respected his experience, but we often disagreed about production speed and safety."}
            }
          },
          {
            "id": "q_f1_motive",
            "category": "motive",
            "text": {"ar": "هل هددك فارس بإبلاغ الإدارة عن تجاوزات في لوحة التحكم؟", "en": "Did Faris threaten to report bypasses in the control panel?"},
            "responses": {
              "calm": {"ar": "طلب تفسيراً لتجاوز مؤقت، ولم يكن تهديداً.", "en": "He asked me to explain a temporary bypass; it was not a threat."},
              "pressing": {"ar": "كل خط فيه تجاوز مؤقت! أنتم تضخمون إجراء صيانة.", "en": "Every production line has temporary bypasses! You are exaggerating routine maintenance."},
              "sympathetic": {"ar": "قال إن توقيعي سيُسحب إن لم أعدّل السجل، وخفت أن أخسر عملي.", "en": "He said my authorization would be revoked unless I corrected the log, and I feared losing my job."}
            }
          },
          {
            "id": "q_f1_timeline",
            "category": "alibi",
            "text": {"ar": "هل رأيت فارس بعد الثامنة والنصف؟", "en": "Did you see Faris after 8:30 PM?"},
            "responses": {
              "calm": {"ar": "مرّ بغرفة التحكم، ثم اتجه إلى خط الضغط الرابع.", "en": "He passed the control room, then headed toward Press Line Four."},
              "pressing": {"ar": "ربما؛ كانت حركة العمال كثيرة ولا أراقب المدير.", "en": "Perhaps; workers were moving around and I do not keep track of the manager."},
              "sympathetic": {"ar": "رأيته يحمل ملفاً أحمر. بدا غاضباً، لكنني لم أتبعه.", "en": "I saw him carrying a red folder. He looked angry, but I did not follow him."}
            }
          },
          {
            "id": "q_f1_permit",
            "category": "evidence",
            "text": {"ar": "لماذا عُدّل تصريح تجاوز الأمان من محطتك؟", "en": "Why was the safety-bypass permit altered at your terminal?"},
            "responses": {
              "calm": {"ar": "راجعت الملف لأن النسخة الورقية كانت ممزقة؛ لم أغيّر توقيعاً.", "en": "I reviewed the file because the paper copy was torn; I did not change a signature."},
              "pressing": {"ar": "سجلات المحطة يلمسها الجميع، لا تتهموني من اسم مستخدم.", "en": "Everyone uses the terminal logs; do not accuse me based on a username."},
              "sympathetic": {"ar": "أضفت ملاحظة فنية بعد رفض فارس التصريح، ولم أتوقع أن تُفهم كأنها توقيعه.", "en": "I added a technical note after Faris rejected the permit; I did not expect it to look like his approval."}
            }
          },
          {
            "id": "q_f1_secret",
            "category": "secret",
            "text": {"ar": "ماذا تخفين عن أدوات المعايرة وخزانة الخط؟", "en": "What are you hiding about the calibration tools and line locker?"},
            "responses": {
              "calm": {"ar": "لا شيء؛ مفتاح الخزانة معي لأنني مسؤولة عن المعايرة.", "en": "Nothing; I keep the locker key because I am responsible for calibration."},
              "pressing": {"ar": "لا تفتشوا عملي بحثاً عن قصة جاهزة.", "en": "Do not search my work for a story you have already written."},
              "sympathetic": {"ar": "أخفيت قصاصة تهديد قديمة كي لا يظنوا أنني كتبتها؛ انظروا خلف قائمة الأدوات.", "en": "I hid an old threat note so nobody would think I wrote it; look behind the tool inventory."}
            }
          },
          {
            "id": "q_f1_tool",
            "category": "evidence",
            "text": {"ar": "كيف وصل مفتاح المعايرة إلى إصابة فارس؟", "en": "How did your calibration wrench leave a mark on Faris?"},
            "responses": {
              "calm": {"ar": "قد يكون قد اصطدم به أثناء فحص الخط؛ لا يعني ذلك أنني ضربته.", "en": "He may have struck it while inspecting the line; that does not mean I hit him."},
              "pressing": {"ar": "أدواتي ليست أسلحة، وأرفض هذا الاتهام.", "en": "My tools are not weapons, and I reject that accusation."},
              "sympathetic": {"ar": "أعرت المفتاح لفنيين أحياناً، لكنني استعدته قبل نهاية الوردية.", "en": "I sometimes lent it to technicians, but I recovered it before the shift ended."}
            }
          },
          {
            "id": "q_f1_circuit",
            "category": "evidence",
            "text": {"ar": "من يستطيع برمجة دائرة التأخير التي سبقت الحريق؟", "en": "Who could program the delay circuit that preceded the fire?"},
            "responses": {
              "calm": {"ar": "فريق التحكم كله يملك الصلاحية، لكن بطاقة كل مستخدم تُسجل.", "en": "The whole controls team has access, but each user's card is logged."},
              "pressing": {"ar": "لا تكفي خبرتي وحدها لإثبات أنني لمستها.", "en": "My expertise alone is not proof that I touched it."},
              "sympathetic": {"ar": "أنا من ضبط مؤقت الإخلاء آخر مرة، وكان يمكنني تغيير زمنه.", "en": "I last set the evacuation timer and could have changed its delay."}
            }
          }
        ],
        "presentReactions": {
          "f04": {"text": {"ar": "تشيح ليلى بنظرها: «كل مفاتيح المعايرة متشابهة تقريباً.»", "en": "Layla looks away: 'All calibration wrenches look nearly alike.'"}},
          "f08": {"text": {"ar": "تتراجع ليلى: «لم أر هذا الغطاء من قبل.»", "en": "Layla steps back: 'I have never seen that cap before.'"}},
          "f10": {"text": {"ar": "تخفض ليلى صوتها: «البطاقة كانت معي، لكنني لم أدخل غرفة التحكم.»", "en": "Layla lowers her voice: 'The card was mine, but I never entered the control room.'"}}
        }
      },
      {
        "id": "suspect_f2",
        "name": {"ar": "عمر الدوسري", "en": "Omar Al-Dosari"},
        "age": 44,
        "job": {"ar": "مشرف الوردية المسائية", "en": "Evening-Shift Supervisor"},
        "relation": {"ar": "كان يرفع تقارير الأعطال مباشرة إلى فارس", "en": "Reported production faults directly to Faris"},
        "alibiWindow": {"start": "20:45", "end": "21:18"},
        "personality": "arrogant",
        "personalityDesc": {"ar": "صوته عالٍ ويعتبر أسئلة المحقق إهانة لسنوات خدمته.", "en": "Loud and proud, he treats every question as an insult to his years of service."},
        "secret": {"ar": "أخفى ساعات عمل إضافية غير مصرح بها، وكتب تهديداً بعد أن خسر مكافأة وردية.", "en": "He concealed unauthorized overtime and wrote a threat after losing a shift bonus."},
        "questions": [
          {
            "id": "q_f2_alibi",
            "category": "alibi",
            "text": {"ar": "أين كنت حين يرجح الطبيب الشرعي وفاة فارس؟", "en": "Where were you during the medical examiner's likely time of death?"},
            "responses": {
              "calm": {"ar": "كنت عند مكتب الوردية أراجع خروج العمال.", "en": "At the shift desk reviewing workers' departures."},
              "pressing": {"ar": "كنت في المصنع؛ هذا عملي، لا دليل أنني قرب الجثة.", "en": "I was in the factory; that is my job, not proof I was near the body."},
              "sympathetic": {"ar": "تحركت بين المكتب والممر، ولا أستطيع تحديد كل دقيقة.", "en": "I moved between the desk and aisle and cannot account for every minute."}
            }
          },
          {
            "id": "q_f2_last_seen",
            "category": "witness",
            "text": {"ar": "متى رأيت فارس آخر مرة؟", "en": "When did you last see Faris?"},
            "responses": {
              "calm": {"ar": "قرابة 21:15، كان واقفاً عند لوحة الخط الرابع.", "en": "Around 9:15 PM, standing by the Line Four panel."},
              "pressing": {"ar": "كان حياً حينها؛ تقرير التشريح لا يعرف كل شيء.", "en": "He was alive then; the autopsy does not know everything."},
              "sympathetic": {"ar": "سمعت صوته في اللاسلكي قرب التاسعة، لذلك ظننت أنه بخير.", "en": "I heard his voice on the radio around nine, so I assumed he was fine."}
            }
          },
          {
            "id": "q_f2_relation",
            "category": "relation",
            "text": {"ar": "هل اختلفت مع المدير بشأن إغلاق خط الإنتاج؟", "en": "Did you argue with the manager about shutting down production?"},
            "responses": {
              "calm": {"ar": "طلب مني تقليل وقت التوقف، ونختلف على الأولويات أحياناً.", "en": "He asked me to reduce downtime; we sometimes disagreed on priorities."},
              "pressing": {"ar": "هو من أغلق الخط وخسرنا المكافأة، لا أنا.", "en": "He shut the line and cost us the bonus, not me."},
              "sympathetic": {"ar": "غضبت عندما أوقف الوردية، لكنني لم أهدده بأذى.", "en": "I was angry when he stopped the shift, but I never threatened to hurt him."}
            }
          },
          {
            "id": "q_f2_logs",
            "category": "evidence",
            "text": {"ar": "لماذا توجد فجوة في سجل إنذار الخط؟", "en": "Why is there a gap in the line's alarm log?"},
            "responses": {
              "calm": {"ar": "انقطعت الطاقة عن اللوحة أثناء الحريق؛ لم ألمس السجل.", "en": "Power failed at the panel during the fire; I did not touch the log."},
              "pressing": {"ar": "اسألوا المهندسة، أنا أتابع العمال لا الدوائر.", "en": "Ask the engineer; I supervise workers, not circuits."},
              "sympathetic": {"ar": "أعدت بث رسالة قديمة عبر اللاسلكي لأطلب إخلاء الممر، لا لأوهمكم أن فارس حي.", "en": "I replayed an old radio message to clear the aisle, not to make you think Faris was alive."}
            }
          },
          {
            "id": "q_f2_threat",
            "category": "evidence",
            "text": {"ar": "هل كتبت «سأجعلك تدفع ثمن إغلاق الخط»؟", "en": "Did you write, 'You'll pay for shutting the line down'?"},
            "responses": {
              "calm": {"ar": "نعم، كتبتها في خلاف على المكافأة، وكانت مبالغة غاضبة.", "en": "Yes, I wrote it during a bonus dispute; it was an angry exaggeration."},
              "pressing": {"ar": "كلام بين موظفين، لا تحوّلوه إلى جريمة قتل.", "en": "It was workplace talk; do not turn it into murder."},
              "sympathetic": {"ar": "ندمت عليها فوراً، ولم أكن أقصد فارس تحديداً.", "en": "I regretted it immediately and did not specifically mean Faris."}
            }
          },
          {
            "id": "q_f2_overtime",
            "category": "secret",
            "text": {"ar": "هل أخفيت سجلات ساعات إضافية؟", "en": "Did you hide the overtime records?"},
            "responses": {
              "calm": {"ar": "نقلت بعض الساعات إلى حساب الوردية كي لا أخسر العمال.", "en": "I moved some hours into the shift account so the workers would not lose pay."},
              "pressing": {"ar": "كل المشرفين يفعلون ذلك! لا علاقة له بفارس.", "en": "Every supervisor does that! It has nothing to do with Faris."},
              "sympathetic": {"ar": "خفت من التحقيق الإداري، فمزقت نسخة السجل فقط.", "en": "I feared an internal inquiry, so I only tore up one copy of the log."}
            }
          },
          {
            "id": "q_f2_fire",
            "category": "witness",
            "text": {"ar": "هل رأيت أحداً يتجه إلى مخزن المذيبات؟", "en": "Did you see anyone heading toward the solvent store?"},
            "responses": {
              "calm": {"ar": "رأيت حركة قرب الممر الجانبي، لكن الدخان حجب الوجوه.", "en": "I saw movement by the side passage, but smoke obscured faces."},
              "pressing": {"ar": "لم أراقب المخزن؛ كنت أخرج العمال.", "en": "I was not watching the store; I was evacuating workers."},
              "sympathetic": {"ar": "سمعت صوت مرحل كهربائي قبل صافرة الحريق بدقائق.", "en": "I heard an electrical relay click minutes before the fire alarm."}
            }
          },
          {
            "id": "q_f2_access",
            "category": "evidence",
            "text": {"ar": "لماذا سجل دفتر الوردية دخول بطاقة L-17 بينما تنكر معرفتها؟", "en": "Why does the shift ledger record card L-17 when you deny knowing it?"},
            "responses": {
              "calm": {"ar": "نسجل كل البطاقات عند البوابة، ولا أستطيع معرفة حاملها من الرقم وحده.", "en": "We record every card at the gate; the number alone does not tell me who carried it."},
              "pressing": {"ar": "البطاقة للمهندسة ليلى، اسألوها عن استخدامها.", "en": "The card belongs to engineer Layla; ask her how it was used."},
              "sympathetic": {"ar": "مررتها في الدفتر بعد الحريق كي لا أُلام على ضياعها.", "en": "I entered it in the ledger after the fire so I would not be blamed for losing it."}
            }
          }
        ],
        "presentReactions": {
          "f09": {"text": {"ar": "يتنهد عمر: «كتبتها، نعم، لكن قبل الحادث بأسبوع.»", "en": "Omar sighs: 'I wrote it, yes, but a week before the incident.'"}},
          "f07": {"text": {"ar": "يشيح عمر بوجهه: «قلت لكم إنني أعدت الرسالة لإخلاء الممر.»", "en": "Omar turns away: 'I told you I replayed the message to clear the aisle.'"}}
        }
      },
      {
        "id": "suspect_f3",
        "name": {"ar": "مريم قاسم", "en": "Mariam Qassem"},
        "age": 41,
        "job": {"ar": "مديرة المشتريات", "en": "Procurement Director"},
        "relation": {"ar": "كانت تعتمد عقود المواد والتجهيزات التي يطلبها فارس", "en": "Approved the materials and equipment contracts requested by Faris"},
        "alibiWindow": {"start": "20:40", "end": "21:00"},
        "personality": "calm",
        "personalityDesc": {"ar": "هادئة ودقيقة، لكنها تنتقي المعلومات التي تفيد موقفها.", "en": "Calm and precise, but selective about which details she shares."},
        "secret": {"ar": "مررت فاتورة توريد قديمة بعد تغيير رمز المخزن، ولم تكن المادة الناقصة في المصنع ليلة الحريق.", "en": "She reprocessed an old supply invoice after changing a warehouse code; the missing material was not at the plant on the fire night."},
        "questions": [
          {
            "id": "q_f3_alibi",
            "category": "alibi",
            "text": {"ar": "هل كنت في المصنع خلال نافذة الوفاة؟", "en": "Were you at the factory during the death window?"},
            "responses": {
              "calm": {"ar": "كنت في مكتب المشتريات أتحدث مع مورد عبر الهاتف.", "en": "I was in the procurement office speaking to a supplier by phone."},
              "pressing": {"ar": "المكالمة تثبت مكاني؛ لا أستطيع صنع سجل هاتف لكم.", "en": "The call proves where I was; I cannot manufacture a phone log for you."},
              "sympathetic": {"ar": "انتهت المكالمة أبكر مما قلت، ثم غادرت المكتب.", "en": "The call ended earlier than I first said, and then I left the office."}
            }
          },
          {
            "id": "q_f3_relation",
            "category": "relation",
            "text": {"ar": "لماذا راجعتك فارس بشأن فاتورة العزل؟", "en": "Why did Faris question you about the insulation invoice?"},
            "responses": {
              "calm": {"ar": "وجد اختلافاً بين كمية الطلب والمخزون، وبدأنا المراجعة.", "en": "He found a mismatch between the order and stock, so we began a review."},
              "pressing": {"ar": "الاختلاف المحاسبي لا يجعلني قاتلة.", "en": "An accounting discrepancy does not make me a murderer."},
              "sympathetic": {"ar": "كنت أعلم أن الفاتورة أُعيدت بعد إغلاقها، وخشيت أن يُحمّلني المسؤولية.", "en": "I knew the invoice had been reopened after closing, and feared he would blame me."}
            }
          },
          {
            "id": "q_f3_invoice",
            "category": "evidence",
            "text": {"ar": "هل وقعتِ فاتورة المادة المقاومة للاشتعال؟", "en": "Did you approve the fire-retardant invoice?"},
            "responses": {
              "calm": {"ar": "وقعت النسخة النهائية بعد مطابقة المخزن، لا نسخة النقص.", "en": "I approved the final copy after checking stock, not the shortage copy."},
              "pressing": {"ar": "كان هناك نقص قديم، لكنه لا يثبت أنني أشعلت شيئاً.", "en": "There was an old shortage, but that does not prove I set anything on fire."},
              "sympathetic": {"ar": "أعدت إدخال فاتورة قديمة لتصحيح رمز المورد، وهذا خطأ إداري مني.", "en": "I re-entered an old invoice to correct the supplier code; that was my administrative mistake."}
            }
          },
          {
            "id": "q_f3_safety",
            "category": "motive",
            "text": {"ar": "هل هددك فارس بكشف تلاعب في حسابات التوريد؟", "en": "Did Faris threaten to expose procurement irregularities?"},
            "responses": {
              "calm": {"ar": "طلب مراجعة الأرقام، ولم يتهمني بالسرقة.", "en": "He asked me to review the figures; he did not accuse me of theft."},
              "pressing": {"ar": "لم أكن مسؤولة عن أنظمة الأمان أو عن تشغيل الخط.", "en": "I was not responsible for the safety systems or operating the line."},
              "sympathetic": {"ar": "قال إن اسمي سيظهر في تقرير التدقيق، وخفت على سمعتي.", "en": "He said my name would appear in the audit report, and I feared for my reputation."}
            }
          },
          {
            "id": "q_f3_witness",
            "category": "witness",
            "text": {"ar": "من كان يملك سبباً لإيقاف خط الضغط الرابع؟", "en": "Who had a reason to stop Press Line Four?"},
            "responses": {
              "calm": {"ar": "فارس أوقفه لأسباب السلامة، وليلى وحدها كانت تصلح مرحلاته.", "en": "Faris stopped it for safety reasons, and Layla alone serviced its relays."},
              "pressing": {"ar": "اسألوا المشرف؛ هو من خسر مكافأة الوردية.", "en": "Ask the supervisor; he was the one who lost the shift bonus."},
              "sympathetic": {"ar": "سمعت أن فارس وليلى تشاجرا في غرفة التحكم قبل أيام.", "en": "I heard Faris and Layla argued in the control room days earlier."}
            }
          },
          {
            "id": "q_f3_secret",
            "category": "secret",
            "text": {"ar": "ما الذي لم تذكريه عن سجل المورد؟", "en": "What did you leave out about the supplier record?"},
            "responses": {
              "calm": {"ar": "كان هناك تعديل في رمز المخزن، وقد صححته لاحقاً.", "en": "There was a warehouse-code change, which I corrected later."},
              "pressing": {"ar": "هذا شأن مالي، وليس له علاقة بمقتل فارس.", "en": "That is a financial matter, unrelated to Faris's murder."},
              "sympathetic": {"ar": "أعدت فاتورة قبل ثلاثة أسابيع لتغطية تأخير التوريد، لكنها تخص مبنى آخر.", "en": "I reprocessed an invoice three weeks ago to cover a supply delay, but it belonged to another building."}
            }
          },
          {
            "id": "q_f3_timing",
            "category": "alibi",
            "text": {"ar": "لماذا انتهت مكالمتك المسجلة عند 20:41؟", "en": "Why does your recorded call end at 8:41 PM?"},
            "responses": {
              "calm": {"ar": "خرجت بعدها إلى ساحة التحميل لمراجعة شحنة.", "en": "I went to the loading yard afterward to inspect a delivery."},
              "pressing": {"ar": "لم أقل إنني بقيت على الهاتف حتى التاسعة.", "en": "I never said I stayed on the phone until nine."},
              "sympathetic": {"ar": "لم أرد ذكر خروجي لأن الشحنة لم تكن مسجلة في النظام.", "en": "I avoided mentioning it because the delivery was not entered in the system."}
            }
          },
          {
            "id": "q_f3_manifest",
            "category": "evidence",
            "text": {"ar": "من عدّل رقم دفعة العازل في قائمة المخزن؟", "en": "Who changed the insulation batch number in the warehouse manifest?"},
            "responses": {
              "calm": {"ar": "أنا صححت الرمز بعد مراجعة الفاتورة القديمة.", "en": "I corrected the code after reviewing the old invoice."},
              "pressing": {"ar": "التعديل محاسبي، ولا يثبت أنني قربت من فارس.", "en": "The edit was accounting work and does not place me near Faris."},
              "sympathetic": {"ar": "استعملت رمز مبنى آخر لتسوية النقص، ولم أتوقع أن يخفي ذلك مصدر الشحنة.", "en": "I used another building's code to reconcile the shortage and did not expect it to hide the shipment's origin."}
            }
          }
        ],
        "presentReactions": {
          "f06": {"text": {"ar": "تغلق مريم الملف: «الفاتورة حقيقية، لكن الدفعة لم تصل إلى هذا المخزن.»", "en": "Mariam closes the file: 'The invoice is real, but that batch never reached this store.'"}},
          "f03": {"text": {"ar": "تقول مريم: «أنا راجعت الكميات، لكن توقيع فارس ليس من اختصاصي.»", "en": "Mariam says: 'I checked the quantities, but Faris's signature was not my responsibility.'"}}
        }
      },
      {
        "id": "suspect_f4",
        "name": {"ar": "سامي فرج", "en": "Sami Faraj"},
        "age": 35,
        "job": {"ar": "فني صيانة ميكانيكية", "en": "Mechanical Maintenance Technician"},
        "relation": {"ar": "كان يصلح المكابس ويشارك في جولات الصيانة مع فارس", "en": "Repaired presses and joined Faris on maintenance rounds"},
        "alibiWindow": {"start": "20:48", "end": "21:16"},
        "personality": "nervous",
        "personalityDesc": {"ar": "متوتر وسريع الكلام، ويخشى أن يُحمّل مسؤولية كل عطل في المصنع.", "en": "Nervous and quick to speak, he fears being blamed for every factory fault."},
        "secret": {"ar": "أخفى زيتاً مسكوباً وغطاء مرحل وجده في ممر الصيانة، لكنه لم يضرب فارس.", "en": "He hid spilled oil and a relay cap he found in the maintenance aisle, but did not strike Faris."},
        "questions": [
          {
            "id": "q_f4_alibi",
            "category": "alibi",
            "text": {"ar": "أين كنت في وقت وفاة مدير الإنتاج؟", "en": "Where were you when the production manager died?"},
            "responses": {
              "calm": {"ar": "في ورشة الصيانة أجهز أدوات الوردية التالية.", "en": "In the maintenance shop preparing tools for the next shift."},
              "pressing": {"ar": "لم أقترب من خط الضغط؛ لا تجعلوا أثر حذاء دليلاً قاطعاً.", "en": "I stayed away from the press; do not treat a boot print as proof."},
              "sympathetic": {"ar": "خرجت إلى الممر لأعيد علبة الزيت، ثم عدت إلى الورشة.", "en": "I went into the aisle to return an oil can, then went back to the shop."}
            }
          },
          {
            "id": "q_f4_manager",
            "category": "relation",
            "text": {"ar": "هل تشاجرت مع فارس بعد إيقاف المكبس؟", "en": "Did you argue with Faris after the press was shut down?"},
            "responses": {
              "calm": {"ar": "اختلفنا على موعد الإصلاح، لكنه كان يعرف أن التوقف ضروري.", "en": "We disagreed about the repair schedule, but he knew the shutdown was necessary."},
              "pressing": {"ar": "هو خصم من أجري بسبب عطل لم أتسبب به.", "en": "He docked my pay for a fault I did not cause."},
              "sympathetic": {"ar": "طلب مني ألا أوقع على تقرير صيانة ناقص، فغضبت منه.", "en": "He asked me not to sign an incomplete repair report, and I got angry."}
            }
          },
          {
            "id": "q_f4_boot",
            "category": "evidence",
            "text": {"ar": "هل طبعة الحذاء في الممر لك؟", "en": "Is the boot print in the aisle yours?"},
            "responses": {
              "calm": {"ar": "قد تكون؛ كل فنيينا يرتدون حذاء المصنع نفسه.", "en": "It could be; all our technicians wear the same factory boot."},
              "pressing": {"ar": "أمشي هناك كل يوم، لكنني لم أقتل أحداً.", "en": "I walk there every day, but I did not kill anyone."},
              "sympathetic": {"ar": "دخلت الممر بعد الإنذار لأبحث عن زميلي، وربما تركت الأثر حينها.", "en": "I entered the aisle after the alarm to find a coworker; I may have left the print then."}
            }
          },
          {
            "id": "q_f4_oil",
            "category": "evidence",
            "text": {"ar": "ما مصدر الزيت الأخضر قرب باب الصيانة؟", "en": "Where did the green oil by the maintenance door come from?"},
            "responses": {
              "calm": {"ar": "زيت تبريد عادي أستخدمه في كل أعمال الإصلاح.", "en": "Ordinary cooling oil that I use for every repair."},
              "pressing": {"ar": "لو كان دليلاً، لوجدتمه في نصف المصنع.", "en": "If that were evidence, you would find it all over the factory."},
              "sympathetic": {"ar": "سكبت قليلاً ونظفته، لكنني أخفيت العلبة خوفاً من مخالفة السلامة.", "en": "I spilled some and cleaned it, but hid the can because I feared a safety citation."}
            }
          },
          {
            "id": "q_f4_secret",
            "category": "secret",
            "text": {"ar": "هل أخفيت شيئاً تحت منصة الكابلات؟", "en": "Did you hide anything beneath the cable platform?"},
            "responses": {
              "calm": {"ar": "وجدت غطاء مرحل هناك وأعدته إلى مكانه.", "en": "I found a relay cap there and put it back where it belonged."},
              "pressing": {"ar": "لم أعبث بالمنصة؛ كان المكان مظلماً وخطراً.", "en": "I did not tamper with the platform; it was dark and dangerous."},
              "sympathetic": {"ar": "أخفيت القطعة حتى لا أُتهم بإتلافها؛ افحصوا الفراغ أسفل المنصة.", "en": "I hid the part so I would not be blamed for damaging it; check the space under the platform."}
            }
          },
          {
            "id": "q_f4_tools",
            "category": "evidence",
            "text": {"ar": "هل تستطيع فتح مرحل خط الضغط بأداة الصيانة؟", "en": "Could you open the press relay with a maintenance tool?"},
            "responses": {
              "calm": {"ar": "نعم، لكن المهندسة ليلى وحدها تملك مفتاح المعايرة الدقيق.", "en": "Yes, but only engineer Layla has the precision calibration wrench."},
              "pressing": {"ar": "أصلح المكابس، لا أبرمج المرحلات.", "en": "I repair presses; I do not program relays."},
              "sympathetic": {"ar": "يمكنني فك الغطاء، لكن أثر الضبط الموجود عليه ليس من أدواتي.", "en": "I could remove the cap, but its adjustment mark is not from my tools."}
            }
          },
          {
            "id": "q_f4_radio",
            "category": "witness",
            "text": {"ar": "هل سمعت صوت فارس على اللاسلكي عند 20:56؟", "en": "Did you hear Faris on the radio at 8:56 PM?"},
            "responses": {
              "calm": {"ar": "نعم، لكن صفارة الخلفية بدت لي كأنها من تسجيل قديم.", "en": "Yes, but the background whistle sounded like an old recording."},
              "pressing": {"ar": "لم أكن قرب الجهاز كي أتحقق من مصدر الرسالة.", "en": "I was not near the radio to verify where the message came from."},
              "sympathetic": {"ar": "أخبرت عمر بالاختلاف، وطلب مني ألا أثير الذعر.", "en": "I told Omar about the mismatch, and he asked me not to cause panic."}
            }
          },
          {
            "id": "q_f4_tunnel",
            "category": "alibi",
            "text": {"ar": "هل كنت تحت منصة الكابلات وقت توقف المرحل؟", "en": "Were you under the cable platform when the relay stopped?"},
            "responses": {
              "calm": {"ar": "كنت في الورشة، لكنني مررت بالممر بعد أن توقف الخط.", "en": "I was in the shop, though I passed the aisle after the line stopped."},
              "pressing": {"ar": "لا أملك بطاقة تحكم، ولا أبرمج المرحلات.", "en": "I have no control card and do not program relays."},
              "sympathetic": {"ar": "وجدت الغطاء هناك بعد الإنذار، ولم أرد أن أُتهم بإهماله.", "en": "I found the cap there after the alarm and did not want to be blamed for neglecting it."}
            }
          }
        ],
        "presentReactions": {
          "f02": {"text": {"ar": "يمسح سامي جبينه: «هذه أحذية العمل نفسها عند الجميع.»", "en": "Sami wipes his brow: 'Those are the same work boots everyone wears.'"}},
          "f05": {"text": {"ar": "يومئ سامي: «هذا زيت الورشة، لا أثر دم ولا مادة حارقة.»", "en": "Sami nods: 'That is shop oil, not blood or an accelerant.'"}}
        }
      },
      {
        "id": "suspect_f5",
        "name": {"ar": "هاني سالم", "en": "Hani Salem"},
        "age": 48,
        "job": {"ar": "حارس بوابة المصنع", "en": "Factory Gate Security Officer"},
        "relation": {"ar": "كان يسجل دخول العمال والشاحنات ويراقب الممر الشرقي", "en": "Logged workers and trucks and monitored the east aisle"},
        "alibiWindow": {"start": "20:38", "end": "21:12"},
        "personality": "remorseful",
        "personalityDesc": {"ar": "متعاون ظاهرياً، لكنه يخفي تقصيره في جولات الحراسة.", "en": "Seemingly cooperative, but hides his lapses during patrols."},
        "secret": {"ar": "غادر موقع البوابة دقائق لمساعدة شاحنة غير مسجلة، وترك كاميرا الممر دون متابعة.", "en": "He left the gate for several minutes to help an unlogged truck and failed to monitor the aisle camera."},
        "questions": [
          {
            "id": "q_f5_alibi",
            "category": "alibi",
            "text": {"ar": "هل بقيت عند البوابة طوال نافذة الوفاة؟", "en": "Did you stay at the gate throughout the death window?"},
            "responses": {
              "calm": {"ar": "هذا ما يظهر في جدول الحراسة، لكنني خرجت في جولة قصيرة.", "en": "That is what the roster says, but I made a short patrol."},
              "pressing": {"ar": "لم أكن قرب خط الإنتاج ولا أملك مفتاح التحكم.", "en": "I was nowhere near production and had no control-panel key."},
              "sympathetic": {"ar": "ابتعدت دقائق لمساعدة شاحنة عند البوابة الجانبية.", "en": "I stepped away for a few minutes to help a truck at the side gate."}
            }
          },
          {
            "id": "q_f5_relation",
            "category": "relation",
            "text": {"ar": "هل كانت لديك مشكلة مع فارس؟", "en": "Did you have a problem with Faris?"},
            "responses": {
              "calm": {"ar": "كان يطالبني بتوثيق كل دخول، حتى بعد انتهاء الوردية.", "en": "He required me to log every entry, even after the shift ended."},
              "pressing": {"ar": "لم يكن بيننا خلاف يستحق أن تسألوا عنه.", "en": "We had no dispute worth asking about."},
              "sympathetic": {"ar": "وبخني بسبب شاحنة غير مسجلة، وكنت أخشى أن أفقد عملي.", "en": "He reprimanded me over an unlogged truck, and I feared losing my job."}
            }
          },
          {
            "id": "q_f5_gate",
            "category": "witness",
            "text": {"ar": "من دخل المصنع عبر البوابة الجانبية؟", "en": "Who entered the factory through the side gate?"},
            "responses": {
              "calm": {"ar": "شاحنة توريد متأخرة؛ لم أتحقق من رقمها قبل فتح البوابة.", "en": "A late delivery truck; I did not verify its number before opening the gate."},
              "pressing": {"ar": "الكاميرا تسجل الدخول، إن لم تكن قد تعطلت.", "en": "The camera records entries, unless it has failed."},
              "sympathetic": {"ar": "لم أر السائق بوضوح؛ كنت بعيداً عن البوابة دقائق.", "en": "I did not see the driver clearly; I was away from the gate for a few minutes."}
            }
          },
          {
            "id": "q_f5_radio",
            "category": "evidence",
            "text": {"ar": "هل أرسلت رسالة فارس المسجلة إلى جهاز الوردية؟", "en": "Did you send the recorded message in Faris's voice to the shift radio?"},
            "responses": {
              "calm": {"ar": "لا؛ جهاز التسجيل عند المشرف، وليس عند البوابة.", "en": "No; the recording unit is with the supervisor, not at the gate."},
              "pressing": {"ar": "لا أستطيع تقليد صوته، ولا أملك صلاحية البث.", "en": "I cannot imitate his voice and have no broadcast access."},
              "sympathetic": {"ar": "سمعت الرسالة من سماعة الممر، ولم أكن مصدرها.", "en": "I heard the message through the aisle speaker; I was not its source."}
            }
          },
          {
            "id": "q_f5_camera",
            "category": "evidence",
            "text": {"ar": "لماذا لم تسجل كاميرا الممر الشرقي حركة العمال؟", "en": "Why did the east-aisle camera fail to record worker movement?"},
            "responses": {
              "calm": {"ar": "كانت زاويتها تحجبها عربة المواد، وأبلغت الصيانة بذلك.", "en": "A supply cart blocked its angle; I reported it to maintenance."},
              "pressing": {"ar": "لم أمسح التسجيل، ولا أملك حساب غرفة التحكم.", "en": "I did not erase the footage and have no control-room account."},
              "sympathetic": {"ar": "أوقفتها دقائق كي لا تصور مخالفة الشاحنة، وكان ذلك خطأ.", "en": "I paused it briefly so it would not record the truck violation; that was wrong."}
            }
          },
          {
            "id": "q_f5_key",
            "category": "secret",
            "text": {"ar": "هل أعطيت أحداً بطاقة دخول احتياطية؟", "en": "Did you give anyone a spare access card?"},
            "responses": {
              "calm": {"ar": "لا، لكن بطاقة الصيانة تمر عبر مكتب الأمن للتسجيل.", "en": "No, but maintenance cards pass through security for logging."},
              "pressing": {"ar": "كل البطاقات مسجلة؛ راجعوا الدفتر بدل التخمين.", "en": "Every card is logged; check the book instead of guessing."},
              "sympathetic": {"ar": "تركت سجل البطاقة مفتوحاً، لذلك قد لا يظهر اسم مستخدمها.", "en": "I left the card log open, so its user may not appear."}
            }
          },
          {
            "id": "q_f5_secret",
            "category": "secret",
            "text": {"ar": "ما الذي تخفيه عن جولة الحراسة؟", "en": "What are you hiding about your patrol?"},
            "responses": {
              "calm": {"ar": "تأخرت عن الجولة، لكنني لم أدخل غرفة الإنتاج.", "en": "I was late for the patrol, but I never entered production."},
              "pressing": {"ar": "كان تقصيراً في العمل، لا جريمة قتل.", "en": "It was negligence, not murder."},
              "sympathetic": {"ar": "ساعدت الشاحنة في نقل صندوقين إلى المخزن، خلافاً للتعليمات.", "en": "I helped the truck move two crates into the store, against procedure."}
            }
          },
          {
            "id": "q_f5_patrol",
            "category": "alibi",
            "text": {"ar": "لماذا يظهر تسجيلك عند الممر الشرقي لا عند البوابة؟", "en": "Why does your log place you in the east aisle instead of at the gate?"},
            "responses": {
              "calm": {"ar": "استخدمت قارئ الممر عند عودتي، بعدما انتهت جولتي.", "en": "I used the aisle reader when I returned, after my patrol."},
              "pressing": {"ar": "كانت الكاميرا مطفأة؛ لا يمكن إثبات مساري بالدقيقة.", "en": "The camera was off; my route cannot be proven minute by minute."},
              "sympathetic": {"ar": "كنت عند المخزن أساعد في نقل الصناديق، وخالفت جدول الحراسة.", "en": "I was at the store helping move crates and violated the patrol schedule."}
            }
          }
        ],
        "presentReactions": {
          "f01": {"text": {"ar": "يخفض هاني عينيه: «كان يجب أن أبقى عند الشاشة حتى وصول الإنذار.»", "en": "Hani lowers his eyes: 'I should have stayed at the monitor until the alarm came.'"}},
          "f07": {"text": {"ar": "يهز هاني رأسه: «الرسالة خرجت من جهاز الوردية، لا من البوابة.»", "en": "Hani shakes his head: 'The message came from the shift radio, not the gate.'"}}
        }
      }
    ]
  },
  {
    "id": "case_005",
    "killerId": "suspect_p5",
    "sceneId": "villa",
    "pressingCooperationMultiplier": 1.65,
    "motiveOptions": {
      "correctId": "motive_archive_coverup",
      "options": [
        {
          "id": "motive_inheritance",
          "text": {
            "ar": "الإبقاء على الفيلا ضمن ميراث الأسرة بعد تعديل الوصية",
            "en": "Keeping the villa in the family estate after the will was revised"
          }
        },
        {
          "id": "motive_archive_coverup",
          "text": {
            "ar": "إسكات المؤسس قبل أن يكشف تحويلات مالية غير مصرح بها داخل أرشيف المؤسسة",
            "en": "Silencing the founder before he exposed unauthorized transfers hidden in the foundation archive"
          }
        },
        {
          "id": "motive_revenge_contract",
          "text": {
            "ar": "الانتقام من نادر بعدما ألغى عقد الطاهي واتهمه بتضخيم الفواتير",
            "en": "Revenge against Nader for cancelling the chef's contract and accusing him of inflating invoices"
          }
        },
        {
          "id": "motive_disinheritance",
          "text": {
            "ar": "استعادة نصيب مها الذي حذفته الوصية الجديدة",
            "en": "Restoring Maha's share, which the new will removed"
          }
        }
      ]
    },
    "endings": {
      "full": {
        "title": {
          "ar": "ما وراء الكأس",
          "en": "Beyond the Glass"
        },
        "text": {
          "ar": "لم يكن فحص الكأس وحده كافياً؛ فقد قاد إلى نتيجة أولية متضاربة وعينة موسومة خطأ. أثبتت بطاقة الجلوس المستعادة، وانعكاس الممر، وسجل بوابة الخدمة أن سلمى يونس غادرت الأرشيف قبل نافذة التعرض وعادت إليه قبل الانهيار. كانت تعرف أن نادر سيعلن تدقيقاً يكشف تحويلات أخفتها داخل ملفات المؤسسة، فاستغلت ثقة الجميع بها. أما الكاميرا والحلية وحبوب اللقاح فكانت آثاراً حقيقية، لكنها تخص أسراراً أخرى لا جريمة القتل.",
          "en": "The glass test alone was not enough; it produced a conflicting preliminary result and a mislabeled sample. The recovered seating card, corridor reflection, and service-gate ledger proved that Salma Younis left the archive during the exposure window and returned before the collapse. She knew Nader was about to announce an audit that would expose transfers she had hidden in the foundation files, and she used everyone's trust in her. The camera loop, clasp, and pollen were real traces, but they belonged to other secrets, not the murder."
        }
      },
      "partial": {
        "title": {
          "ar": "شكوك بلا ترتيب",
          "en": "Suspicion Without Sequence"
        },
        "text": {
          "ar": "وصلت إلى بعض الأسرار، لكنك خلطت بين من كان لديه دافع ومن استطاع الوصول إلى الضحية في الوقت المناسب. بقيت نتائج المختبر المتعارضة بلا تفسير، ولم تربط بطاقة الجلوس بسجل البوابة وانعكاس الممر. أُعيد فتح التحقيق لأن الدليل المضلل بدا أقوى من التسلسل الزمني.",
          "en": "You uncovered some secrets, but confused those who had a motive with the person who could reach the victim at the right time. The conflicting laboratory results remained unexplained, and you never connected the seating card to the gate log and corridor reflection. The investigation was reopened because the misleading evidence seemed stronger than the timeline."
        }
      },
      "innocent": {
        "title": {
          "ar": "اتهام على ضوء الشموع",
          "en": "An Accusation by Candlelight"
        },
        "text": {
          "ar": "انهار المتهم الذي اخترته وكشف سرّاً حقيقياً، لكن ذلك السر لم يفسر نافذة التسمم ولا سجل الأرشيف. بقيت سلمى بعيدة عن دائرة الاتهام، واختفت فرصة مواجهة التحويلات التي كشفتها أدلة المختبر والممر. في هذه الفيلا، لم يكن صاحب الدافع الأوضح هو القاتل.",
          "en": "The suspect you chose broke down and revealed a real secret, but it did not explain the poisoning window or the archive log. Salma remained outside the accusation, and the chance to confront the transfers exposed by the lab and corridor evidence was lost. In this villa, the person with the clearest motive was not the killer."
        }
      }
    },
    "title": {
      "ar": "ليلة بلا نخب",
      "en": "The Toast That Never Came"
    },
    "intro": {
      "ar": "في حفلة خاصة بفيلا السرو، جمع نادر الراوي خمسة أشخاص حول إعلان وشيك عن مستقبل مؤسسته الخيرية. قبل موعد النخب بدقائق، بدأ يشعر بدوار ثم سقط قرب الصالة الزجاجية. تقول الشهادات إنه كان في أماكن مختلفة في الوقت نفسه، ويبدو أن ساعة البث أبطأ من ساعة الفيلا. تقرير التشريح يثبت التسمم، لكن أول تحاليل الكأس تناقضت: هل أخطأ المختبر، أم أن أحدهم رتّب الأدلة كي تقود إلى شخص آخر؟",
      "en": "At a private party in Villa Al-Sarw, Nader Al-Rawi gathered five people to announce the future of his charitable foundation. Minutes before the toast, he became dizzy and collapsed beside the glass salon. Witnesses place him in different rooms at the same time, and the livestream clock appears slower than the villa clock. The autopsy confirms poisoning, but the first tests on the glass conflict: did the lab make a mistake, or did someone arrange the evidence to point elsewhere?"
    },
    "victim": {
      "name": {
        "ar": "نادر الراوي",
        "en": "Nader Al-Rawi"
      },
      "description": {
        "ar": "مؤسس مؤسسة الجسر الخيرية، في التاسعة والخمسين، وكان يستعد لإعلان تدقيق جديد وتعديل وصيته أمام دائرة ضيقة من الضيوف.",
        "en": "The 59-year-old founder of Al-Jisr Foundation, preparing to announce a new audit and revise his will before a small circle of guests."
      },
      "placeOfDeath": {
        "ar": "أرض الصالة الزجاجية عند الباب المؤدي إلى الحديقة",
        "en": "The floor of the glass salon beside the garden doors"
      },
      "timeOfDeath": {
        "ar": "بين 22:26 و22:40، بعد تعرض مرجح بين 21:52 و22:08",
        "en": "Between 10:26 and 10:40 PM, after likely exposure between 9:52 and 10:08 PM"
      }
    },
    "autopsy": {
      "cause": {
        "ar": "فشل قلبي حاد متوافق مع تعرض لمركب سام غير محدد. لا توجد إصابة جسدية قاتلة، ولا يكفي أثر المركب في الكأس وحده لتحديد مصدره.",
        "en": "Acute cardiac failure consistent with exposure to an unidentified toxic compound. There is no fatal physical injury, and the trace in the glass alone cannot establish its source."
      },
      "deathWindow": {
        "start": "22:26",
        "end": "22:40"
      },
      "findings": [
        {
          "ar": "تظهر العينة النسيجية والعينة الهضمية مؤشرات متوافقة على تعرض غير معتاد، لكن الفحص الأولي لمحتوى الكأس لم يعط نتيجة قابلة للتكرار.",
          "en": "Tissue and gastric samples show compatible signs of unusual exposure, but the first screening of the glass contents could not be reproduced."
        },
        {
          "ar": "تقدّر المؤشرات أن التعرض سبق الانهيار بنحو عشرين إلى أربعين دقيقة؛ نافذة التعرض المرجحة بين 21:52 و22:08.",
          "en": "The markers indicate exposure roughly twenty to forty minutes before collapse; the likely exposure window is 9:52 to 10:08 PM."
        },
        {
          "ar": "بدأ اضطراب النبض قبل النخب المعلن، ولذلك لا تثبت رؤية نادر قرب المائدة عند 22:20 أنه كان سليماً بعد ذلك.",
          "en": "The rhythm disturbance began before the announced toast, so seeing Nader near the table at 10:20 PM does not prove he remained well afterward."
        },
        {
          "ar": "ساعة البث المباشر متأخرة سبع دقائق عن ساعة الخدمة؛ لا بد من تصحيحها قبل مقارنة تسجيلات الشهود.",
          "en": "The livestream clock is seven minutes behind the service clock and must be corrected before comparing witness accounts."
        },
        {
          "ar": "حبوب اللقاح على الكم سطحية ولا تظهر في العينات الداخلية؛ وهي لا تثبت أن الضحية تناول شيئاً من الحديقة.",
          "en": "The pollen on the cuff is superficial and absent from internal samples; it does not prove the victim consumed anything from the garden."
        }
      ]
    },
    "location": {
      "name": {
        "ar": "فيلا السرو",
        "en": "Villa Al-Sarw"
      },
      "description": {
        "ar": "فيلا خاصة تتصل فيها صالة استقبال زجاجية بحديقة مسوّرة وممر خدمة جانبي. تتوزع فيها كاميرات قديمة وأبواب داخلية لا تسجل جميعها الوقت نفسه.",
        "en": "A private villa where a glass reception salon opens onto a walled garden and a side service passage. Old cameras and interior doors do not all record the same time."
      }
    },
    "scene": [
      {
        "id": "point_p01_timeline",
        "name": {
          "ar": "لوحة برنامج الحفلة",
          "en": "Party Schedule Board"
        },
        "desc": {
          "ar": "لوحة قرب مدخل الصالة تحمل أوقات الفقرات؛ توقيت البث المكتوب بجوارها لا يطابق ساعة الخدمة.",
          "en": "A board by the salon entrance lists the event schedule; the livestream time written beside it does not match the service clock."
        },
        "x": 20,
        "y": 25,
        "clueId": "p01"
      },
      {
        "id": "point_p02_glass",
        "name": {
          "ar": "كأس الضحية",
          "en": "Victim's Glass"
        },
        "desc": {
          "ar": "كأس على الطاولة القريبة من نادر؛ نتيجة المسحة الأولى لا تتفق مع إعادة الفحص.",
          "en": "A glass on the table near Nader; the first swab result conflicts with the retest."
        },
        "x": 47,
        "y": 45,
        "clueId": "p02"
      },
      {
        "id": "point_p03_bouquet",
        "name": {
          "ar": "تنسيق الزهور",
          "en": "Flower Arrangement"
        },
        "desc": {
          "ar": "باقة كبيرة قرب الأبواب الزجاجية، تتناثر منها حبوب لقاح على حافة الستارة.",
          "en": "A large bouquet beside the glass doors has left pollen on the curtain edge."
        },
        "x": 73,
        "y": 33,
        "clueId": "p03"
      },
      {
        "id": "point_p04_seating",
        "name": {
          "ar": "بطاقة المقعد المعدلة",
          "en": "Altered Place Card"
        },
        "desc": {
          "ar": "بطاقة جلوس أعيدت طباعتها لتضع نادر قرب باب الحديقة؛ أثر الطابعة مختلف عن بقية البطاقات.",
          "en": "A reprinted place card moved Nader beside the garden door; its printer mark differs from the other cards."
        },
        "x": 56,
        "y": 48,
        "clueId": "p04"
      },
      {
        "id": "point_p05_security",
        "name": {
          "ar": "لوحة الكاميرات",
          "en": "Camera Console"
        },
        "desc": {
          "ar": "لوحة مراقبة قديمة تعرض تكراراً قصيراً في تسجيل الممر الشرقي.",
          "en": "An old monitoring console shows a short loop in the east-corridor recording."
        },
        "x": 43,
        "y": 16,
        "clueId": "p05"
      },
      {
        "id": "point_p06_envelope",
        "name": {
          "ar": "الظرف المختوم",
          "en": "Sealed Envelope"
        },
        "desc": {
          "ar": "مسودة تعديل للوصية أُعدت قبل الحفلة، وبداخلها أسماء حُذفت وأخرى أضيفت.",
          "en": "A draft will amendment prepared before the party, with some names removed and others added."
        },
        "x": 18,
        "y": 50,
        "clueId": "p06"
      },
      {
        "id": "point_p07_clasp",
        "name": {
          "ar": "مشبك أسفل المقعد",
          "en": "Clasp Beneath the Bench"
        },
        "desc": {
          "ar": "مشبك معدني يشبه قطعة من سوار رانيا، لكنه عالق في قماش مقعد الحديقة.",
          "en": "A metal clasp resembling a piece of Rania's bracelet is caught in the garden bench fabric."
        },
        "x": 79,
        "y": 82,
        "clueId": "p07",
        "hiddenUntil": {
          "suspectId": "suspect_p1",
          "questionId": "q_p1_secret",
          "approach": "sympathetic"
        }
      },
      {
        "id": "point_p08_reflection",
        "name": {
          "ar": "انعكاس في المرآة",
          "en": "Mirror Reflection"
        },
        "desc": {
          "ar": "لقطة غير واضحة من بث الحفلة تعكس مدخل الممر في مرآة الصالة.",
          "en": "A blurred frame from the party stream reflects the corridor entrance in the salon mirror."
        },
        "x": 29,
        "y": 25,
        "clueId": "p08",
        "hiddenUntil": {
          "suspectId": "suspect_p4",
          "questionId": "q_p4_secret",
          "approach": "pressing"
        }
      },
      {
        "id": "point_p09_gate",
        "name": {
          "ar": "دفتر بوابة الخدمة",
          "en": "Service-Gate Ledger"
        },
        "desc": {
          "ar": "دفتر يدوي عند البوابة الخلفية يسجل فتحاً واحداً في نافذة التعرض، رغم نفي صاحبة المفتاح مغادرة الأرشيف.",
          "en": "A handwritten ledger at the back gate records one opening during the exposure window, despite the keyholder denying she left the archive."
        },
        "x": 91,
        "y": 76,
        "clueId": "p09",
        "hiddenUntil": {
          "suspectId": "suspect_p5",
          "questionId": "q_p5_secret",
          "approach": "sympathetic"
        }
      },
      {
        "id": "point_body",
        "name": {
          "ar": "جثة نادر",
          "en": "Nader's Body"
        },
        "desc": {
          "ar": "جثة نادر ممددة على أرض الصالة الزجاجية قرب الحديقة. تفتيشها يتيح تقرير الطب الشرعي ويُحسب كإجراء تحقيق.",
          "en": "Nader's body lies on the glass-salon floor beside the garden. Examining it unlocks the autopsy report and counts as an investigation action."
        },
        "x": 52,
        "y": 80,
        "clueId": null
      }
    ],
    "clues": [
      {
        "id": "p01",
        "name": {
          "ar": "اختلاف ساعة الحفلة",
          "en": "Party Clock Discrepancy"
        },
        "desc": {
          "ar": "تُظهر لوحة الخدمة أن بث الحفلة متأخر سبع دقائق عن ساعة الفيلا؛ بعض الشهادات اعتمدت على توقيت البث.",
          "en": "The service board shows the party stream is seven minutes behind the villa clock; several accounts relied on the stream time."
        },
        "type": "document",
        "importance": "important",
        "suspectIds": [
          "suspect_p1",
          "suspect_p2",
          "suspect_p3",
          "suspect_p4",
          "suspect_p5"
        ]
      },
      {
        "id": "p02",
        "name": {
          "ar": "مسحة متضاربة من الكأس",
          "en": "Conflicting Glass Swab"
        },
        "desc": {
          "ar": "أعطت المسحة الأولى إشارة مثيرة للقلق، لكن إعادة الفحص على عينة مختومة لم تكرر النتيجة.",
          "en": "The first swab produced a worrying signal, but a retest on a sealed sample did not reproduce it."
        },
        "type": "trace",
        "importance": "misleading",
        "suspectIds": [
          "suspect_p2"
        ],
        "analyzable": true,
        "labType": "trace",
        "certainty": "medium",
        "misleading": true,
        "labSuspectIds": [],
        "labResultMedium": {
          "ar": "الفحص الأولي يعطي إشارة غير حاسمة لمركب ضار؛ قد تكون الكأس مرت بمطبخ زياد، لكن النتيجة لا تحدد المصدر.",
          "en": "The preliminary screen gives an inconclusive signal for a harmful compound; the glass may have passed through Ziad's kitchen, but the result does not identify a source."
        },
        "labResult": {
          "ar": "لم يظهر المركب في العينة المختومة. الإشارة الأولى تطابقت مع بقايا غير سامة على صينية جمع العينات، لذلك لا تربط الكأس بالمطبخ أو بزياد.",
          "en": "The compound was absent from the sealed sample. The first signal matched harmless residue on the collection tray, so the glass does not link the kitchen or Ziad to the poisoning."
        },
        "recoveredClue": {
          "id": "p10",
          "name": {
            "ar": "بطاقة عينة منقولة",
            "en": "Misassigned Sample Label"
          },
          "desc": {
            "ar": "سجل المختبر يثبت أن ملصق المسحة الأولى نُقل من كأس مجاور. الإشارة التي أثارت الشبهة لا تخص كأس نادر ولا تثبت تورط الطاهي.",
            "en": "The lab log shows the first swab label was copied from a neighboring glass. The signal that raised suspicion did not belong to Nader's glass and does not implicate the chef."
          },
          "type": "document",
          "importance": "misleading",
          "suspectIds": [
            "suspect_p2"
          ]
        }
      },
      {
        "id": "p03",
        "name": {
          "ar": "حبوب لقاح على الستارة",
          "en": "Pollen on the Curtain"
        },
        "desc": {
          "ar": "حبوب لقاح على طرف الستارة قرب الحديقة، تبدو كأنها انتقلت من كم رانيا.",
          "en": "Pollen on the curtain by the garden appears to have transferred from Rania's sleeve."
        },
        "type": "trace",
        "importance": "misleading",
        "suspectIds": [
          "suspect_p1"
        ],
        "analyzable": true,
        "labType": "trace",
        "certainty": "high",
        "misleading": true,
        "labSuspectIds": [],
        "labResult": {
          "ar": "المجهر يطابق حبوب اللقاح مع باقة أحضرها بائع الزهور قبل الحفلة، لا مع نباتات الحديقة. وجودها لا يثبت مرور رانيا أو الضحية من الباب.",
          "en": "Microscopy matches the pollen to a florist's bouquet delivered before the party, not to the garden plants. It does not prove Rania or the victim passed through the door."
        }
      },
      {
        "id": "p04",
        "name": {
          "ar": "بطاقة المقعد المعاد طبعها",
          "en": "Reprinted Place Card"
        },
        "desc": {
          "ar": "بطاقة معدلة وضعت مقعد نادر قرب باب الحديقة؛ في ظهرها أثر قصّ دقيق ورمز طباعة باهت.",
          "en": "An altered card moved Nader's seat beside the garden door; its back bears a precise cut and a faint print code."
        },
        "type": "document",
        "importance": "crucial",
        "suspectIds": [
          "suspect_p5"
        ],
        "analyzable": true,
        "labType": "document",
        "labSeed": 58124,
        "certainty": "high",
        "labSuspectIds": [
          "suspect_p5"
        ],
        "paperText": {
          "ar": "أرشيف الجسر — تعديل مقعد الضيف الرئيسي — أمر طباعة 21:46 — المستخدم: S.Y.",
          "en": "Al-Jisr Archive — Principal Guest Seat Revision — Print Order 9:46 PM — User: S.Y."
        },
        "labResultMedium": {
          "ar": "تبدو ألياف الورق قريبة من بطاقات الطعام التي جهزها المطبخ؛ قد يكون التعديل من عمل فريق الضيافة.",
          "en": "The paper fibers resemble the menu cards prepared by the kitchen; the revision may have come from the hospitality team."
        },
        "labResult": {
          "ar": "تتطابق علامة الطابعة مع محطة الأرشيف، ويظهر سجل الطباعة أمراً عند 21:46 باسم المستخدم S.Y. نتيجة الفحص الأولية خلطت بين نوعي الورق.",
          "en": "The printer mark matches the archive station, and the print log shows a 9:46 PM order under user S.Y. The preliminary result confused two paper stocks."
        },
        "recoveredClue": {
          "id": "p11",
          "name": {
            "ar": "سجل أمر الطباعة المستعاد",
            "en": "Recovered Print-Queue Record"
          },
          "desc": {
            "ar": "نسخة من سجل الأرشيف تربط تعديل بطاقة نادر بحساب سلمى، وتثبت أن البطاقة طُبعت بعد إغلاق قائمة الضيوف.",
            "en": "A recovered archive log ties the revision of Nader's card to Salma's account and shows it was printed after the guest list was closed."
          },
          "type": "document",
          "importance": "crucial",
          "suspectIds": [
            "suspect_p5"
          ]
        }
      },
      {
        "id": "p05",
        "name": {
          "ar": "تكرار تسجيل الكاميرا",
          "en": "Camera Recording Loop"
        },
        "desc": {
          "ar": "تتكرر سبع ثوانٍ من الممر الشرقي، وهو الجزء الذي كان هادي مسؤولاً عن مراقبته.",
          "en": "Seven seconds repeat in the east corridor, the section Hadi was assigned to monitor."
        },
        "type": "document",
        "importance": "misleading",
        "suspectIds": [
          "suspect_p4"
        ],
        "analyzable": true,
        "labType": "trace",
        "certainty": "medium",
        "misleading": true,
        "labSuspectIds": [],
        "labResult": {
          "ar": "تتطابق الثواني المكررة مع اختبار صيانة مجدول بدأ قبل وصول الضيوف؛ سجل الكاميرا يثير الشبهة لكنه لا يثبت دخول هادي أو خروجه.",
          "en": "The repeated seconds match a scheduled maintenance test begun before the guests arrived; the camera log is suspicious but does not prove Hadi entered or left."
        }
      },
      {
        "id": "p06",
        "name": {
          "ar": "مسودة تعديل الوصية",
          "en": "Draft Will Amendment"
        },
        "desc": {
          "ar": "مسودة تحمل تغييرات تمس نصيب رانيا ومها، وتجدد عقد الطاهي، وتطلب تدقيق سجلات الأمن والأرشيف.",
          "en": "A draft changes Rania and Maha's shares, renews the chef's contract, and orders an audit of security and archive records."
        },
        "type": "document",
        "importance": "important",
        "suspectIds": [
          "suspect_p1",
          "suspect_p2",
          "suspect_p3",
          "suspect_p4",
          "suspect_p5"
        ]
      },
      {
        "id": "p07",
        "name": {
          "ar": "مشبك السوار المكسور",
          "en": "Broken Bracelet Clasp"
        },
        "desc": {
          "ar": "قطعة تشبه سوار رانيا، عالقة أسفل مقعد الحديقة بعد وقت الحفلة.",
          "en": "A piece resembling Rania's bracelet is caught beneath the garden bench after the party."
        },
        "type": "trace",
        "importance": "misleading",
        "suspectIds": [
          "suspect_p1"
        ],
        "analyzable": true,
        "labType": "trace",
        "certainty": "high",
        "misleading": true,
        "labSuspectIds": [],
        "labResult": {
          "ar": "المشبك من إكسسوار مسرحي استُخدم في فقرة موسيقية، ومعدنه لا يطابق سوار رانيا. وجوده يثبت حركة قرب المقعد فقط.",
          "en": "The clasp belongs to a costume accessory used in the musical interlude, and its metal does not match Rania's bracelet. It only proves someone moved near the bench."
        }
      },
      {
        "id": "p08",
        "name": {
          "ar": "الشخص المنعكس في البث",
          "en": "Figure Reflected in the Stream"
        },
        "desc": {
          "ar": "في المرآة يظهر شخص يحمل ملفاً رفيعاً ويغادر الأرشيف باتجاه الصالة قبل نافذة التعرض، ثم لا يظهر في اللقطة المباشرة.",
          "en": "The mirror shows someone carrying a thin folder leaving the archive toward the salon before the exposure window, then disappearing from the direct camera view."
        },
        "type": "document",
        "importance": "crucial",
        "suspectIds": [
          "suspect_p5"
        ],
        "analyzable": true,
        "labType": "document",
        "labSeed": 28517,
        "certainty": "high",
        "labSuspectIds": [
          "suspect_p5"
        ],
        "paperText": {
          "ar": "إطار 184 — انعكاس باب الأرشيف — 21:58 — ملف فضي الحافة",
          "en": "Frame 184 — Archive Door Reflection — 9:58 PM — Silver-edged folder"
        },
        "labResult": {
          "ar": "تصحيح الانعكاس يثبت أن الشخص خرج من باب الأرشيف عند 21:58. حجم الملف وشريطه الفضي يطابقان ملف سلمى، ولا يتفقان مع شهادتها بأنها بقيت في الداخل.",
          "en": "Reflection correction confirms the figure left the archive door at 9:58 PM. The folder's size and silver band match Salma's file and contradict her claim that she stayed inside."
        }
      },
      {
        "id": "p09",
        "name": {
          "ar": "دفتر بوابة الحديقة الخلفية",
          "en": "Back Garden-Gate Ledger"
        },
        "desc": {
          "ar": "قيد يدوي مستقل عن ساعات الفيلا يسجل خروج مستخدم الأرشيف S.Y. عند 22:01 وعودته عند 22:09.",
          "en": "A handwritten entry independent of the villa clocks records archive user S.Y. leaving at 10:01 PM and returning at 10:09 PM."
        },
        "type": "document",
        "importance": "crucial",
        "suspectIds": [
          "suspect_p5"
        ]
      },
      {
        "id": "p10",
        "name": {
          "ar": "ملاحظة نقل ملصق العينة",
          "en": "Sample-Label Transfer Note"
        },
        "desc": {
          "ar": "ملاحظة استعادها المختبر تكشف أن ملصق المسحة الأولى نُقل من عينة مجاورة؛ إنها تفسر الاشتباه الخاطئ في مطبخ زياد.",
          "en": "A lab-recovered note shows the first swab label came from a neighboring sample; it explains the false suspicion around Ziad's kitchen."
        },
        "type": "document",
        "importance": "misleading",
        "suspectIds": [
          "suspect_p2"
        ]
      },
      {
        "id": "p11",
        "name": {
          "ar": "سجل الطباعة المستعاد",
          "en": "Recovered Print-Queue Record"
        },
        "desc": {
          "ar": "أمر الطباعة باسم سلمى يثبت أن بطاقة مقعد نادر عُدلت بعد إغلاق القائمة، وينقض ادعاء أن البطاقة بدلتها الضيافة.",
          "en": "The print order under Salma's account proves Nader's place card was changed after the list closed, disproving the claim that hospitality staff moved it."
        },
        "type": "document",
        "importance": "crucial",
        "suspectIds": [
          "suspect_p5"
        ]
      }
    ],
    "suspects": [
      {
        "id": "suspect_p1",
        "name": {
          "ar": "رانيا السعدي",
          "en": "Rania Al-Saadi"
        },
        "age": 46,
        "job": {
          "ar": "زوجة الضحية وعضوة مجلس الأمناء",
          "en": "Victim's wife and foundation trustee"
        },
        "relation": {
          "ar": "كان نادر يعتزم إخراجها من إدارة المؤسسة وتغيير نصيبها في الفيلا.",
          "en": "Nader planned to remove her from foundation leadership and change her share of the villa."
        },
        "motive": {
          "ar": "خسارة النفوذ والمنزل بعد تعديل الوصية.",
          "en": "Losing her influence and home after the will amendment."
        },
        "alibiWindow": {
          "start": "21:50",
          "end": "22:18"
        },
        "personality": "calm",
        "personalityDesc": {
          "ar": "تحافظ على هدوئها وتجيب كأنها ما زالت تدير اجتماعاً رسمياً.",
          "en": "She stays composed and answers as if she is still chairing a formal meeting."
        },
        "secret": {
          "ar": "باعت قطعة من مقتنيات الفيلا لسداد دين، ثم أخفت الأمر عن نادر.",
          "en": "She sold a piece from the villa collection to repay a debt, then hid it from Nader."
        },
        "questions": [
          {
            "id": "q_p1_alibi",
            "category": "alibi",
            "text": {
              "ar": "أين كنت بين 21:50 و22:18؟",
              "en": "Where were you between 9:50 and 10:18 PM?"
            },
            "responses": {
              "calm": {
                "ar": "كنت في الحديقة أتحدث مع الضيوف، ثم عدت قبل النخب.",
                "en": "I was in the garden speaking with guests, then returned before the toast."
              },
              "pressing": {
                "ar": "لا أستطيع إثبات كل دقيقة؛ الكاميرات لم تكن تعمل.",
                "en": "I cannot prove every minute; the cameras were not working."
              },
              "sympathetic": {
                "ar": "خرجت لأبتعد عن نقاش الوصية، ولم أكن وحدي طوال الوقت.",
                "en": "I went out to avoid the will discussion, and I was not alone the whole time."
              }
            }
          },
          {
            "id": "q_p1_motive",
            "category": "motive",
            "text": {
              "ar": "هل كان تعديل الوصية سيحرمك من الفيلا؟",
              "en": "Would the will amendment have cost you the villa?"
            },
            "responses": {
              "calm": {
                "ar": "كان سيغير الإدارة، لا يعني ذلك أنني أريد موته.",
                "en": "It would have changed the trusteeship; that does not mean I wanted him dead."
              },
              "pressing": {
                "ar": "كان منزلي أيضاً، لكنني لم أقتله من أجله.",
                "en": "It was my home too, but I did not kill him for it."
              },
              "sympathetic": {
                "ar": "خفت أن أفقد حياتي كلها دفعة واحدة، وهذا ما جعلني أغادر الصالة.",
                "en": "I feared losing my whole life at once, which is why I left the salon."
              }
            }
          },
          {
            "id": "q_p1_relation",
            "category": "relation",
            "text": {
              "ar": "متى أخبرك نادر بأنه سيعلن التعديل؟",
              "en": "When did Nader tell you he would announce the amendment?"
            },
            "responses": {
              "calm": {
                "ar": "قبل يومين، وقال إن التفاصيل ستبقى خاصة حتى نهاية الحفلة.",
                "en": "Two days ago; he said the details would remain private until the party ended."
              },
              "pressing": {
                "ar": "لم يخبرني إلا حين وصلت المسودة إلى يدي.",
                "en": "He did not tell me until the draft reached my hands."
              },
              "sympathetic": {
                "ar": "كان يعتقد أنني سأفهم قراره، لكنه لم يمنحني وقتاً لأستوعبه.",
                "en": "He thought I would understand, but he gave me no time to absorb it."
              }
            }
          },
          {
            "id": "q_p1_pollen",
            "category": "evidence",
            "text": {
              "ar": "كيف وصل لقاح الحديقة إلى ستارة الصالة؟",
              "en": "How did garden pollen reach the salon curtain?"
            },
            "responses": {
              "calm": {
                "ar": "الباقة وصلت قبل الحفلة، وربما لامست الستارة أثناء ترتيبها.",
                "en": "The bouquet arrived before the party and may have brushed the curtain while being arranged."
              },
              "pressing": {
                "ar": "كنت في الحديقة، لكن هذا لا يثبت أنني قرب كأسه.",
                "en": "I was in the garden, but that does not put me near his glass."
              },
              "sympathetic": {
                "ar": "ساعدت في نقل الزهور قبل وصول الضيوف؛ لم أعد إلى تلك الزاوية.",
                "en": "I helped move the flowers before guests arrived; I did not return to that corner."
              }
            }
          },
          {
            "id": "q_p1_witness",
            "category": "witness",
            "text": {
              "ar": "هل رأيت نادر قبل انهياره؟",
              "en": "Did you see Nader before he collapsed?"
            },
            "responses": {
              "calm": {
                "ar": "رأيته قرب الطاولة، وكان يطلب من سلمى ملفاً.",
                "en": "I saw him near the table asking Salma for a folder."
              },
              "pressing": {
                "ar": "نعم، وكان واقفاً؛ هذا لا يثبت وقت تناول أي شيء.",
                "en": "Yes, he was standing; that does not establish when he consumed anything."
              },
              "sympathetic": {
                "ar": "بدا متعباً قبل النخب، لكنني ظننت أن التوتر هو السبب.",
                "en": "He looked tired before the toast, but I thought it was stress."
              }
            }
          },
          {
            "id": "q_p1_bracelet",
            "category": "evidence",
            "text": {
              "ar": "هل فقدت مشبكاً من سوارك في الحديقة؟",
              "en": "Did you lose a clasp from your bracelet in the garden?"
            },
            "responses": {
              "calm": {
                "ar": "لا، سوارِي كامل. قد يكون من إكسسوار الفقرة الموسيقية.",
                "en": "No, my bracelet is intact. It may belong to a costume from the musical interlude."
              },
              "pressing": {
                "ar": "وجدتم قطعة تشبهه، لا قطعة تخصني.",
                "en": "You found something similar, not something that belongs to me."
              },
              "sympathetic": {
                "ar": "كنت قرب المقعد مرة واحدة، حين حملت وشاحاً سقط عن ضيفة.",
                "en": "I was near the bench once, when I picked up a guest's fallen shawl."
              }
            }
          },
          {
            "id": "q_p1_money",
            "category": "motive",
            "text": {
              "ar": "هل كانت لديك ديون لم يعرف بها نادر؟",
              "en": "Did you have debts Nader did not know about?"
            },
            "responses": {
              "calm": {
                "ar": "كانت مسألة شخصية، وقد سددت معظمها.",
                "en": "They were personal matters, and I had repaid most of them."
              },
              "pressing": {
                "ar": "لا أقبل تحويل خلاف مالي إلى اتهام بالقتل.",
                "en": "I will not let a financial dispute become a murder accusation."
              },
              "sympathetic": {
                "ar": "بعت قطعة صغيرة من المجموعة، وخشيت أن يكتشف نادر ذلك.",
                "en": "I sold a small piece from the collection and feared Nader would discover it."
              }
            }
          },
          {
            "id": "q_p1_secret",
            "category": "secret",
            "text": {
              "ar": "ما الذي تخفينه عن خروجك إلى الحديقة؟",
              "en": "What are you hiding about your trip to the garden?"
            },
            "secretReveal": {
              "approach": "sympathetic",
              "text": {
                "ar": "تتنهد رانيا: «أخذت المشبك من إكسسوار الفرقة لأخفي أنني بعت قطعة من الفيلا؛ لم أقترب من كأس نادر.»",
                "en": "Rania sighs: “I took the clasp from a performer’s accessory to hide that I had sold a piece from the villa; I never went near Nader’s glass.”"
              }
            },
            "responses": {
              "calm": {
                "ar": "لا شيء؛ أردت بعض الهواء فقط.",
                "en": "Nothing; I only wanted some air."
              },
              "pressing": {
                "ar": "كنت في الحديقة، وقد قلت ذلك بالفعل.",
                "en": "I was in the garden; I have already said so."
              },
              "sympathetic": {
                "ar": "لم أرد أن يسمع الضيوف عن الدين أو عن القطعة التي بعتها.",
                "en": "I did not want the guests to hear about the debt or the piece I sold."
              }
            }
          }
        ],
        "presentReactions": {
          "p03": {
            "text": {
              "ar": "تتفحص رانيا الستارة: «هذه الباقة من متجر المدينة، لم آت بها من الحديقة.»",
              "en": "Rania studies the curtain: “That bouquet came from the city florist, not the garden.”"
            }
          },
          "p06": {
            "text": {
              "ar": "تشد رانيا قبضتها: «لم يكن يحق له تغيير كل شيء من دون أن يخبرني.»",
              "en": "Rania clenches her hand: “He had no right to change everything without telling me.”"
            }
          }
        }
      },
      {
        "id": "suspect_p2",
        "name": {
          "ar": "زياد مراد",
          "en": "Ziad Murad"
        },
        "age": 39,
        "job": {
          "ar": "طاهٍ ومتعهّد الحفلة",
          "en": "Chef and party caterer"
        },
        "relation": {
          "ar": "هدده نادر بفسخ عقده بعد اكتشاف فواتير مضخمة.",
          "en": "Nader threatened to cancel his contract after finding inflated invoices."
        },
        "motive": {
          "ar": "خسارة عقده ومواجهة دعوى احتيال تهدد عمله.",
          "en": "Losing his contract and facing a fraud claim that could end his business."
        },
        "alibiWindow": {
          "start": "21:48",
          "end": "22:16"
        },
        "personality": "proud",
        "personalityDesc": {
          "ar": "يتمسك بسمعته المهنية ويعتبر كل سؤال عن المطبخ اتهاماً شخصياً.",
          "en": "He clings to his professional reputation and treats every kitchen question as a personal accusation."
        },
        "secret": {
          "ar": "بدّل بطاقات صناديق توريد لإخفاء فرق سعر، ثم أعادها قبل الجرد.",
          "en": "He swapped supplier-box labels to conceal a price discrepancy, then restored them before inventory."
        },
        "questions": [
          {
            "id": "q_p2_alibi",
            "category": "alibi",
            "text": {
              "ar": "هل بقيت في المطبخ طوال نافذة التعرض؟",
              "en": "Were you in the kitchen for the whole exposure window?"
            },
            "responses": {
              "calm": {
                "ar": "غادرت لدقائق لأوصل طبقاً إلى الصالة.",
                "en": "I left for a few minutes to carry a dish into the salon."
              },
              "pressing": {
                "ar": "كان معي مساعدان؛ اسألوهما عن كل حركة.",
                "en": "Two assistants were with me; ask them about every movement."
              },
              "sympathetic": {
                "ar": "لم أستطع ترك الفرن، لكن باب الخدمة كان مفتوحاً.",
                "en": "I could not leave the oven, but the service door was open."
              }
            }
          },
          {
            "id": "q_p2_contract",
            "category": "motive",
            "text": {
              "ar": "ما الذي كان سيحدث لعقدك بعد إعلان التدقيق؟",
              "en": "What would happen to your contract after the audit announcement?"
            },
            "responses": {
              "calm": {
                "ar": "ربما كان سيُراجع، لكنني أستطيع تبرير كل فاتورة.",
                "en": "It might have been reviewed, but I can justify every invoice."
              },
              "pressing": {
                "ar": "كان سيخسرني عملي، لكنني لم أقتل الرجل.",
                "en": "It could have cost me my job, but I did not kill him."
              },
              "sympathetic": {
                "ar": "كنت غاضباً لأن نادر اتهمني قبل أن يسمع تفسيري.",
                "en": "I was angry that Nader accused me before hearing my explanation."
              }
            }
          },
          {
            "id": "q_p2_glass",
            "category": "evidence",
            "text": {
              "ar": "لماذا ظهرت إشارة مقلقة في مسحة الكأس الأولى؟",
              "en": "Why did the first glass swab show a worrying signal?"
            },
            "responses": {
              "calm": {
                "ar": "الكؤوس انتقلت بين طاولات عدة، ولا أعرف من جمع تلك العينة.",
                "en": "The glasses moved between several tables, and I do not know who collected that sample."
              },
              "pressing": {
                "ar": "نتيجتان متعارضتان لا تصنعان دليلاً ضدي.",
                "en": "Two conflicting results do not make evidence against me."
              },
              "sympathetic": {
                "ar": "طلبت من العاملين جمع الكؤوس معاً، وربما كان ذلك خطأ.",
                "en": "I asked the staff to collect the glasses together; that may have been a mistake."
              }
            }
          },
          {
            "id": "q_p2_delivery",
            "category": "witness",
            "text": {
              "ar": "من سلّم الكأس إلى نادر؟",
              "en": "Who served Nader's glass?"
            },
            "responses": {
              "calm": {
                "ar": "النادل عادل، وفق جدول الخدمة.",
                "en": "The server Adel, according to the service roster."
              },
              "pressing": {
                "ar": "لم أكن أراقب كل كوب؛ كنت أتابع الأطباق.",
                "en": "I was not watching every glass; I was monitoring the dishes."
              },
              "sympathetic": {
                "ar": "طلبت من سلمى نقل صينية فارغة، لا تقديم المشروبات.",
                "en": "I asked Salma to move an empty tray, not to serve drinks."
              }
            }
          },
          {
            "id": "q_p2_labels",
            "category": "evidence",
            "text": {
              "ar": "لماذا اختلفت ملصقات بعض صناديق المورد؟",
              "en": "Why were some supplier-box labels different?"
            },
            "responses": {
              "calm": {
                "ar": "وصلت الصناديق مختلطة، وصححناها قبل بدء الحفلة.",
                "en": "The boxes arrived mixed, and we corrected them before the party."
              },
              "pressing": {
                "ar": "ذلك شأن المورد، لا علاقة له بما شربه نادر.",
                "en": "That is the supplier's issue, not what Nader drank."
              },
              "sympathetic": {
                "ar": "كان هناك فرق سعر لم أرد أن يكتشفه نادر قبل أن أشرح.",
                "en": "There was a price discrepancy I did not want Nader to discover before I could explain."
              }
            }
          },
          {
            "id": "q_p2_sample",
            "category": "evidence",
            "text": {
              "ar": "هل خلط فريقك عينات الكؤوس؟",
              "en": "Did your team mix up the glass samples?"
            },
            "responses": {
              "calm": {
                "ar": "قد يكون الجمع المتأخر سبب الالتباس، لكنني لم ألمس العينات.",
                "en": "The late collection may have caused confusion, but I never handled the samples."
              },
              "pressing": {
                "ar": "المختبر هو من وضع الملصقات؛ لا تحملوني خطأه.",
                "en": "The lab applied the labels; do not blame me for its mistake."
              },
              "sympathetic": {
                "ar": "أرسلت مساعداً ليجمع الكؤوس، وكان يجب أن أطلب منه فصل كل واحد.",
                "en": "I sent an assistant to collect the glasses and should have asked him to keep them separate."
              }
            }
          },
          {
            "id": "q_p2_witness",
            "category": "witness",
            "text": {
              "ar": "هل رأيت نادر يشرب قبل النخب؟",
              "en": "Did you see Nader drink before the toast?"
            },
            "responses": {
              "calm": {
                "ar": "رأيته يأخذ رشفة قرب الساعة العاشرة، ثم ترك الكأس.",
                "en": "I saw him take a sip near ten, then leave the glass."
              },
              "pressing": {
                "ar": "لا أعرف أي كأس كانت في يده.",
                "en": "I do not know which glass he was holding."
              },
              "sympathetic": {
                "ar": "طلب ماءً بعد ذلك، وقال إن طعم المشروب لا يناسبه.",
                "en": "He asked for water afterward and said the drink did not suit him."
              }
            }
          },
          {
            "id": "q_p2_secret",
            "category": "secret",
            "text": {
              "ar": "ما الذي تخفيه عن تبديل ملصقات التوريد؟",
              "en": "What are you hiding about changing the supplier labels?"
            },
            "secretReveal": {
              "approach": "pressing",
              "text": {
                "ar": "يرد زياد بعد صمت: «بدلت الملصقات لأخفي فرق السعر، لا محتوى أي كأس. أخذت صينية فارغة إلى الصالة ثم عدت.»",
                "en": "After a pause, Ziad answers: “I changed the labels to hide the price difference, not a glass's contents. I carried an empty tray to the salon and came back.”"
              }
            },
            "responses": {
              "calm": {
                "ar": "كان خطأً محاسبياً صغيراً، وقد أصلحته.",
                "en": "It was a small accounting mistake, and I corrected it."
              },
              "pressing": {
                "ar": "لن أسمح لك بتشويه سمعتي بسبب ملصق.",
                "en": "I will not let you ruin my reputation over a label."
              },
              "sympathetic": {
                "ar": "كنت أخشى فقدان العقد إذا عرف نادر أنني أخفيت فرق السعر.",
                "en": "I feared losing the contract if Nader learned I concealed the price difference."
              }
            }
          }
        ],
        "presentReactions": {
          "p02": {
            "text": {
              "ar": "يهز زياد رأسه: «هذه ليست نتيجة واحدة، بل عينتان مختلفتان.»",
              "en": "Ziad shakes his head: “That is not one result; it is two different samples.”"
            }
          },
          "p10": {
            "text": {
              "ar": "يتنفس زياد ببطء: «قلت لكم إن الملصق لا يخص كأس نادر.»",
              "en": "Ziad exhales slowly: “I told you the label did not belong to Nader's glass.”"
            }
          }
        }
      },
      {
        "id": "suspect_p3",
        "name": {
          "ar": "مها الراوي",
          "en": "Maha Al-Rawi"
        },
        "age": 29,
        "job": {
          "ar": "ابنة أخ الضحية ومنسقة الأمسية",
          "en": "Victim's niece and event coordinator"
        },
        "relation": {
          "ar": "حذف نادر اسمها من الوصية بعدما اكتشف توقيعاً مزوراً على طلب مالي.",
          "en": "Nader removed her from the will after discovering a forged signature on a financial request."
        },
        "motive": {
          "ar": "الانتقام من عمها واستعادة نصيب كانت تعتمد عليه.",
          "en": "Revenge against her uncle and recovering a share she depended on."
        },
        "alibiWindow": {
          "start": "22:00",
          "end": "22:24"
        },
        "personality": "nervous",
        "personalityDesc": {
          "ar": "تتلعثم حين تُذكر الوصية وتحاول تغيير الموضوع إلى تفاصيل الحفلة.",
          "en": "She stumbles when the will is mentioned and tries to redirect the conversation to party details."
        },
        "secret": {
          "ar": "قدمت طلباً مالياً بتوقيع إلكتروني غير مصرح به قبل أن تُحذف من الوصية.",
          "en": "She submitted a financial request with an unauthorized electronic signature before being removed from the will."
        },
        "questions": [
          {
            "id": "q_p3_alibi",
            "category": "alibi",
            "text": {
              "ar": "أين كنت وقت بدء أعراض نادر؟",
              "en": "Where were you when Nader's symptoms began?"
            },
            "responses": {
              "calm": {
                "ar": "كنت أرتب الموسيقى قرب غرفة البيانو.",
                "en": "I was arranging the music near the piano room."
              },
              "pressing": {
                "ar": "لا أذكر الدقيقة؛ ساعة البث نفسها متأخرة.",
                "en": "I do not remember the exact minute; the stream clock is behind."
              },
              "sympathetic": {
                "ar": "كنت وحدي لدقائق بعدما سمعت أن نادر سيعلن الوصية.",
                "en": "I was alone for a few minutes after hearing Nader would announce the will."
              }
            }
          },
          {
            "id": "q_p3_will",
            "category": "motive",
            "text": {
              "ar": "لماذا حذف نادر اسمك من الوصية؟",
              "en": "Why did Nader remove your name from the will?"
            },
            "responses": {
              "calm": {
                "ar": "قال إنني لم أكن صريحة بشأن طلب مالي.",
                "en": "He said I had not been honest about a financial request."
              },
              "pressing": {
                "ar": "غضبت، لكن الغضب لا يجعلني قاتلة.",
                "en": "I was angry, but anger does not make me a killer."
              },
              "sympathetic": {
                "ar": "كنت أحتاج ذلك المال لتسديد قرض، ولم أعرف كيف أواجهه.",
                "en": "I needed that money to repay a loan and did not know how to face him."
              }
            }
          },
          {
            "id": "q_p3_schedule",
            "category": "witness",
            "text": {
              "ar": "من غيّر ترتيب المقاعد قبل الحفلة؟",
              "en": "Who changed the seating plan before the party?"
            },
            "responses": {
              "calm": {
                "ar": "وصلتني نسخة معدلة من الأرشيف، فوضعتها كما هي.",
                "en": "A revised copy came from the archive, so I placed it as instructed."
              },
              "pressing": {
                "ar": "لم أطبع البطاقة، ولم تكن الطابعة في مكتبي.",
                "en": "I did not print the card, and the printer was not in my office."
              },
              "sympathetic": {
                "ar": "استغربت قرب مقعده من الباب، لكن سلمى قالت إنه طلب ذلك.",
                "en": "I wondered why his seat was by the door, but Salma said he had requested it."
              }
            }
          },
          {
            "id": "q_p3_signature",
            "category": "evidence",
            "text": {
              "ar": "هل استخدمت توقيع نادر في طلب القرض؟",
              "en": "Did you use Nader's signature on the loan request?"
            },
            "responses": {
              "calm": {
                "ar": "كان الطلب إلكترونياً، ولم أغيّر توقيعه.",
                "en": "The request was electronic; I did not alter his signature."
              },
              "pressing": {
                "ar": "لم أضع توقيعاً على أي شيء أمامك.",
                "en": "I did not sign anything in front of you."
              },
              "sympathetic": {
                "ar": "أرسلت مسودة باسمه على أساس أنه سيوافق لاحقاً.",
                "en": "I sent a draft in his name assuming he would approve it later."
              }
            }
          },
          {
            "id": "q_p3_music",
            "category": "alibi",
            "text": {
              "ar": "هل غادرت غرفة البيانو أثناء الفقرة الموسيقية؟",
              "en": "Did you leave the piano room during the musical interlude?"
            },
            "responses": {
              "calm": {
                "ar": "خرجت لأحضر النوتة، وعدت قبل انتهاء المقطوعة.",
                "en": "I stepped out to get the score and returned before the piece ended."
              },
              "pressing": {
                "ar": "الجميع تحرك؛ لا تجعلوا كل خطوة دليلاً.",
                "en": "Everyone moved around; do not turn every step into evidence."
              },
              "sympathetic": {
                "ar": "رأيت سلمى في الممر تحمل ملفاً، لكنني لم أسألها.",
                "en": "I saw Salma in the corridor carrying a folder but did not ask her about it."
              }
            }
          },
          {
            "id": "q_p3_pollen",
            "category": "evidence",
            "text": {
              "ar": "هل كانت لك علاقة بالزهور التي ظهرت آثارها على الستارة؟",
              "en": "Did you handle the flowers whose pollen was found on the curtain?"
            },
            "responses": {
              "calm": {
                "ar": "رتبت الباقة عند وصولها، قبل بدء الحفلة.",
                "en": "I arranged the bouquet when it arrived, before the party began."
              },
              "pressing": {
                "ar": "ذلك لا يضعني قرب كأس نادر وقت التسمم.",
                "en": "That does not put me near Nader's glass during the exposure window."
              },
              "sympathetic": {
                "ar": "أردت أن تبدو الصالة جميلة رغم الخلاف مع عمي.",
                "en": "I wanted the salon to look beautiful despite my conflict with my uncle."
              }
            }
          },
          {
            "id": "q_p3_broadcast",
            "category": "witness",
            "text": {
              "ar": "هل رأيت نادر في بث الحفلة بعد الساعة العاشرة؟",
              "en": "Did you see Nader on the party stream after ten?"
            },
            "responses": {
              "calm": {
                "ar": "ظهر قرب الطاولة، لكن التوقيت كان متأخراً عن الساعة الحقيقية.",
                "en": "He appeared near the table, but the stream time lagged behind the real clock."
              },
              "pressing": {
                "ar": "لم أراقب البث؛ كنت أتابع الموسيقى.",
                "en": "I was not watching the stream; I was monitoring the music."
              },
              "sympathetic": {
                "ar": "سمعت صوته بعد أن خرجت، لذلك ظننت أنه بخير.",
                "en": "I heard his voice after I stepped out, so I thought he was fine."
              }
            }
          },
          {
            "id": "q_p3_secret",
            "category": "secret",
            "text": {
              "ar": "هل وقعت طلباً مالياً باسم نادر؟",
              "en": "Did you approve a financial request in Nader's name?"
            },
            "secretReveal": {
              "approach": "calm",
              "text": {
                "ar": "تقر مها: «أرسلت الطلب بتوقيعه الإلكتروني قبل موافقته، ثم حذفته من السجل. كنت أخشى أن أفقد نصيبي، لكنني لم أقترب منه في الحفلة.»",
                "en": "Maha admits: “I submitted the request with his electronic signature before he approved it, then removed it from the log. I feared losing my share, but I never approached him at the party.”"
              }
            },
            "responses": {
              "calm": {
                "ar": "كان سوء فهم في صلاحيات الحساب.",
                "en": "It was a misunderstanding about account permissions."
              },
              "pressing": {
                "ar": "لن أعترف بتزوير لم أرتكبه.",
                "en": "I will not confess to a forgery I did not commit."
              },
              "sympathetic": {
                "ar": "كنت خائفة من القرض، ولم أكن أعرف كيف أطلب المساعدة.",
                "en": "I was afraid of the loan and did not know how to ask for help."
              }
            }
          }
        ],
        "presentReactions": {
          "p04": {
            "text": {
              "ar": "تهز مها رأسها: «أنا وضعت البطاقات على الطاولة، لكن النسخة المعدلة وصلتني من الأرشيف.»",
              "en": "Maha shakes her head: “I placed the cards on the table, but the revised copy came from the archive.”"
            }
          },
          "p06": {
            "text": {
              "ar": "تشيح مها بنظرها: «لم أكن أعرف أن اسمي سيُحذف قبل أن يعلن ذلك.»",
              "en": "Maha looks away: “I did not know my name would be removed until he announced it.”"
            }
          }
        }
      },
      {
        "id": "suspect_p4",
        "name": {
          "ar": "هادي منصور",
          "en": "Hadi Mansour"
        },
        "age": 52,
        "job": {
          "ar": "مسؤول أمن الفيلا",
          "en": "Villa security chief"
        },
        "relation": {
          "ar": "كان نادر يعتزم إيقافه والتحقيق في تسريب معلومات الضيوف.",
          "en": "Nader planned to dismiss him and investigate the leaking of guest information."
        },
        "motive": {
          "ar": "حماية عمله وإخفاء دخله من بيع مواعيد دخول خاصة.",
          "en": "Keeping his job and concealing income from selling private access schedules."
        },
        "alibiWindow": {
          "start": "21:44",
          "end": "22:34"
        },
        "personality": "arrogant",
        "personalityDesc": {
          "ar": "يتحدث بلهجة آمرة ويستند إلى سجلات الأمن حتى حين تكون ساعتها موضع شك.",
          "en": "He speaks in commands and leans on security logs even when their clocks are in question."
        },
        "secret": {
          "ar": "أوقف تسجيل كاميرا ليدخل زائر غير مدرج، مقابل مال، ثم أعاد تشغيلها.",
          "en": "He paused a camera so an unlisted visitor could enter for money, then restarted it."
        },
        "questions": [
          {
            "id": "q_p4_alibi",
            "category": "alibi",
            "text": {
              "ar": "هل بقيت في غرفة الأمن حتى انهيار نادر؟",
              "en": "Did you stay in the security room until Nader collapsed?"
            },
            "responses": {
              "calm": {
                "ar": "كنت أراجع الشاشات، وخرجت مرة واحدة إلى الممر.",
                "en": "I was reviewing the monitors and stepped into the corridor once."
              },
              "pressing": {
                "ar": "سجلي يثبت وجودي هناك، إلا إذا كنتم تشكون بكل ساعة.",
                "en": "My log places me there unless you doubt every clock."
              },
              "sympathetic": {
                "ar": "كنت مسؤولاً عن أمن الحفلة، لكن الكاميرا الشرقية أربكتني.",
                "en": "I was responsible for the party's security, but the east camera confused me."
              }
            }
          },
          {
            "id": "q_p4_loop",
            "category": "evidence",
            "text": {
              "ar": "لماذا تكرر تسجيل الممر الشرقي؟",
              "en": "Why does the east-corridor recording loop?"
            },
            "responses": {
              "calm": {
                "ar": "كان هناك اختبار صيانة، وقد أخطأ الفني في إغلاقه.",
                "en": "There was a maintenance test, and the technician failed to close it."
              },
              "pressing": {
                "ar": "لا يثبت التكرار أن أحداً مر من هناك.",
                "en": "The loop does not prove anyone passed through there."
              },
              "sympathetic": {
                "ar": "أخفيت زيارة غير مسجلة قبل الحفلة، ولم أتوقع أن يمتد أثرها.",
                "en": "I hid an unlogged visit before the party and did not expect its trace to remain."
              }
            }
          },
          {
            "id": "q_p4_dismissal",
            "category": "motive",
            "text": {
              "ar": "هل أخبرك نادر أنه سيفصلك؟",
              "en": "Did Nader tell you he planned to dismiss you?"
            },
            "responses": {
              "calm": {
                "ar": "قال إنه سيعيد تنظيم الأمن بعد إعلان التدقيق.",
                "en": "He said security would be reorganized after the audit."
              },
              "pressing": {
                "ar": "كان يهددني، لكنني لم أعبث بأدويته أو شرابه.",
                "en": "He threatened me, but I did not tamper with his medicine or drink."
              },
              "sympathetic": {
                "ar": "كنت أخشى أن أفقد دخلي وبيتي معاً.",
                "en": "I feared losing both my income and my home."
              }
            }
          },
          {
            "id": "q_p4_guest",
            "category": "witness",
            "text": {
              "ar": "من كان الزائر غير المسجل؟",
              "en": "Who was the unlisted visitor?"
            },
            "responses": {
              "calm": {
                "ar": "عامل توصيل غادر قبل وصول الضيوف.",
                "en": "A delivery worker who left before the guests arrived."
              },
              "pressing": {
                "ar": "لم يدخل أحد أثناء الحفلة من دون أن أسجله.",
                "en": "No one entered during the party without my recording it."
              },
              "sympathetic": {
                "ar": "كان شخصاً من الصحافة، ودفع لي كي لا يظهر اسمه.",
                "en": "It was someone from the press who paid me to keep his name off the list."
              }
            }
          },
          {
            "id": "q_p4_stream",
            "category": "evidence",
            "text": {
              "ar": "هل راجعت انعكاس الممر في بث الحفلة؟",
              "en": "Did you review the corridor reflection in the party stream?"
            },
            "responses": {
              "calm": {
                "ar": "لم أراجع البث بعد؛ كنت أعتمد على الكاميرات الأمنية.",
                "en": "I had not reviewed the stream; I relied on the security cameras."
              },
              "pressing": {
                "ar": "الانعكاس مشوش ولا يثبت هوية أحد.",
                "en": "The reflection is blurred and proves no one's identity."
              },
              "sympathetic": {
                "ar": "الكاميرا لا تغطي باب الأرشيف، لذلك لم أبحث عن مخرج هناك.",
                "en": "The camera does not cover the archive door, so I did not look for an exit there."
              }
            }
          },
          {
            "id": "q_p4_gate",
            "category": "evidence",
            "text": {
              "ar": "هل كان سجل بوابة الحديقة يعمل؟",
              "en": "Was the garden-gate ledger working?"
            },
            "responses": {
              "calm": {
                "ar": "السجل يدوي، لكنه مستقل عن ساعة الكاميرات.",
                "en": "The ledger is manual, but independent of the camera clocks."
              },
              "pressing": {
                "ar": "لا أتحكم بما يكتبه الحارس عند البوابة.",
                "en": "I do not control what the gate attendant writes."
              },
              "sympathetic": {
                "ar": "تركت دفتراً احتياطياً عند الممر كي لا تتوقف الحركة.",
                "en": "I left a spare ledger by the passage so traffic would not stop."
              }
            }
          },
          {
            "id": "q_p4_benefit",
            "category": "motive",
            "text": {
              "ar": "هل استفدت من تسريب مواعيد الضيوف؟",
              "en": "Did you profit from leaking the guests' schedules?"
            },
            "responses": {
              "calm": {
                "ar": "لم يكن تسريباً؛ كان ترتيباً خاصاً للزيارة.",
                "en": "It was not a leak; it was a private visit arrangement."
              },
              "pressing": {
                "ar": "لن أجيب عن اتهام لا علاقة له بالوفاة.",
                "en": "I will not answer an accusation unrelated to the death."
              },
              "sympathetic": {
                "ar": "قبلت مالاً مرة واحدة، وكان ذلك كافياً ليجعل نادر يشك بي.",
                "en": "I accepted money once, enough to make Nader suspicious of me."
              }
            }
          },
          {
            "id": "q_p4_secret",
            "category": "secret",
            "text": {
              "ar": "من الذي سمحت له بالدخول خارج قائمة الضيوف؟",
              "en": "Whom did you let in outside the guest list?"
            },
            "secretReveal": {
              "approach": "pressing",
              "text": {
                "ar": "يعترف هادي: «أوقفت الكاميرا لدقائق ليدخل صحفي إلى الحديقة، ثم سجلت الحركة كاختبار صيانة. لم يكن ذلك نادر ولا سلمى.»",
                "en": "Hadi admits: “I paused the camera for a few minutes so a reporter could enter the garden, then logged it as maintenance. It was not Nader or Salma.”"
              }
            },
            "responses": {
              "calm": {
                "ar": "لم أسمح لأحد بالدخول من دون تسجيل.",
                "en": "I let no one enter without a record."
              },
              "pressing": {
                "ar": "كان زائراً عابراً، لا علاقة له بالحادث.",
                "en": "It was a brief visitor, unrelated to the incident."
              },
              "sympathetic": {
                "ar": "كنت أحاول حماية عملي، لكنني أخطأت في سجل الكاميرا.",
                "en": "I was trying to protect my job, but I falsified the camera log."
              }
            }
          }
        ],
        "presentReactions": {
          "p05": {
            "text": {
              "ar": "يحدق هادي في الشاشة: «اختبار الصيانة لا يعني أن أحداً دخل إلى الصالة.»",
              "en": "Hadi stares at the screen: “A maintenance test does not mean someone entered the salon.”"
            }
          },
          "p08": {
            "text": {
              "ar": "يتوقف هادي عند الإطار: «لم يكن هذا الممر ضمن زاوية كاميراتي.»",
              "en": "Hadi pauses at the frame: “That corridor was outside my cameras' angle.”"
            }
          }
        }
      },
      {
        "id": "suspect_p5",
        "name": {
          "ar": "سلمى يونس",
          "en": "Salma Younis"
        },
        "age": 34,
        "job": {
          "ar": "أمينة أرشيف مؤسسة الجسر",
          "en": "Al-Jisr Foundation archivist"
        },
        "relation": {
          "ar": "وثق بها نادر في حفظ الملفات، لكنه طلب تدقيق حسابات الأرشيف قبل الحفلة.",
          "en": "Nader trusted her with the records, but ordered an audit of the archive accounts before the party."
        },
        "motive": {
          "ar": "منع كشف تحويلات غير مصرح بها قد تفضحها وتنهي عملها.",
          "en": "Preventing the discovery of unauthorized transfers that could expose her and end her career."
        },
        "alibiWindow": {
          "start": "22:00",
          "end": "22:40"
        },
        "personality": "evasive",
        "personalityDesc": {
          "ar": "تتحدث بهدوء وتستعمل تفاصيل السجلات لتجنب الإجابة المباشرة.",
          "en": "She speaks softly and uses record-keeping details to avoid direct answers."
        },
        "secret": {
          "ar": "عدّلت سجلات منح لتغطية تحويلات غير مصرح بها إلى حساب وسيط يخص أسرتها.",
          "en": "She altered grant records to conceal unauthorized transfers to an intermediary account tied to her family."
        },
        "questions": [
          {
            "id": "q_p5_alibi",
            "category": "alibi",
            "text": {
              "ar": "هل بقيت في الأرشيف بين العاشرة والانهيار؟",
              "en": "Did you remain in the archive from ten until the collapse?"
            },
            "responses": {
              "calm": {
                "ar": "نعم، كنت أرتب الملفات التي طلبها نادر.",
                "en": "Yes, I was organizing the files Nader requested."
              },
              "pressing": {
                "ar": "لا أحد يستطيع رؤية الداخل من كاميرا الممر.",
                "en": "No one can see inside from the corridor camera."
              },
              "sympathetic": {
                "ar": "خرجت مرة لأحضر ملفاً، ثم عدت قبل بدء النخب.",
                "en": "I stepped out once to fetch a folder, then returned before the toast."
              }
            }
          },
          {
            "id": "q_p5_audit",
            "category": "motive",
            "text": {
              "ar": "لماذا طلب نادر تدقيق سجلات الأرشيف؟",
              "en": "Why did Nader order an audit of the archive records?"
            },
            "responses": {
              "calm": {
                "ar": "كانت هناك قيود ناقصة تحتاج إلى مراجعة.",
                "en": "Some entries were incomplete and needed review."
              },
              "pressing": {
                "ar": "لم يكن ذلك اتهاماً لي؛ كل السجلات متاحة.",
                "en": "It was not an accusation against me; all the records are available."
              },
              "sympathetic": {
                "ar": "كان يريد إنهاء التدقيق أمام المانحين، ولم أكن مستعدة لذلك.",
                "en": "He wanted the audit finished before the donors arrived, and I was not ready."
              }
            }
          },
          {
            "id": "q_p5_card",
            "category": "evidence",
            "text": {
              "ar": "هل طبعت بطاقة المقعد الجديدة؟",
              "en": "Did you print the revised place card?"
            },
            "responses": {
              "calm": {
                "ar": "أرسلت نسخة القائمة إلى مها؛ لا أعرف من طبع البطاقة.",
                "en": "I sent the list to Maha; I do not know who printed the card."
              },
              "pressing": {
                "ar": "رمز S.Y. لا يثبت أنني كنت عند الطابعة.",
                "en": "The S.Y. code does not prove I was at the printer."
              },
              "sympathetic": {
                "ar": "طلب نادر تغيير مقعده، لكنني لا أتذكر متى أرسلت التعديل.",
                "en": "Nader asked to change his seat, but I do not remember when I sent the revision."
              }
            }
          },
          {
            "id": "q_p5_folder",
            "category": "witness",
            "text": {
              "ar": "ما الملف الذي حمله الشخص المنعكس في المرآة؟",
              "en": "What folder was carried by the figure reflected in the mirror?"
            },
            "responses": {
              "calm": {
                "ar": "تستخدم المؤسسة ملفات رمادية كثيرة؛ لا يمكن تمييزها من لقطة.",
                "en": "The foundation uses many gray folders; they cannot be distinguished from one frame."
              },
              "pressing": {
                "ar": "لم أغادر الأرشيف، ولذلك لا أعرف من ظهر في الانعكاس.",
                "en": "I did not leave the archive, so I do not know who appeared in the reflection."
              },
              "sympathetic": {
                "ar": "كان معي ملف فضي الحافة، لكنني أعدته إلى المكتب.",
                "en": "I had a silver-edged folder, but I returned it to the office."
              }
            }
          },
          {
            "id": "q_p5_service",
            "category": "evidence",
            "text": {
              "ar": "لماذا يذكر دفتر البوابة الأحرف S.Y.؟",
              "en": "Why does the gate ledger contain the initials S.Y.?"
            },
            "responses": {
              "calm": {
                "ar": "قد تكون الأحرف لشخص آخر؛ ليست كتابة اسمي.",
                "en": "The initials could belong to someone else; that is not my handwriting."
              },
              "pressing": {
                "ar": "الدفتر يدوي ويمكن لأي شخص أن يكتب فيه.",
                "en": "The ledger is handwritten and anyone could write in it."
              },
              "sympathetic": {
                "ar": "طلبت من الحارس فتح البوابة لإعادة ملف، ثم رجعت مباشرة.",
                "en": "I asked the attendant to open the gate so I could return a folder, then came straight back."
              }
            }
          },
          {
            "id": "q_p5_transfer",
            "category": "motive",
            "text": {
              "ar": "هل مرّت منح المؤسسة عبر حساب وسيط؟",
              "en": "Did foundation grants pass through an intermediary account?"
            },
            "responses": {
              "calm": {
                "ar": "كانت التحويلات مؤقتة لتسوية فواتير متأخرة.",
                "en": "The transfers were temporary, to settle overdue invoices."
              },
              "pressing": {
                "ar": "لا يوجد دليل على أنني احتفظت بأي مال.",
                "en": "There is no proof that I kept any money."
              },
              "sympathetic": {
                "ar": "كان الحساب لأسرتي، وأقنعت نفسي أنني سأعيد كل شيء.",
                "en": "The account was tied to my family, and I convinced myself I would return everything."
              }
            }
          },
          {
            "id": "q_p5_clock",
            "category": "alibi",
            "text": {
              "ar": "هل اعتمدت على ساعة البث لتحديد وقت عودتك؟",
              "en": "Did you rely on the stream clock to time your return?"
            },
            "responses": {
              "calm": {
                "ar": "نظرت إليها مرة، ولم أعرف أنها متأخرة.",
                "en": "I glanced at it once and did not know it was behind."
              },
              "pressing": {
                "ar": "ساعة البوابة أدق من البث، لكن الدفتر ليس إلكترونياً.",
                "en": "The gate clock is more accurate than the stream, but the ledger is not electronic."
              },
              "sympathetic": {
                "ar": "رأيت الوقت على الشاشة وقلت إنني عدت قبل العاشرة، لكنني ربما أخطأت.",
                "en": "I saw the time on the screen and said I returned before ten, but I may have misread it."
              }
            }
          },
          {
            "id": "q_p5_secret",
            "category": "secret",
            "text": {
              "ar": "ما الذي أخفيته عن تدقيق المؤسسة؟",
              "en": "What did you hide from the foundation audit?"
            },
            "secretReveal": {
              "approach": "sympathetic",
              "text": {
                "ar": "تنكسر نبرة سلمى: «عدّلت قيود المنح لأحوّل المال إلى حساب أسرتي بعد مرض أخي. خرجت لأعيد ملفاً، لكن نادر اكتشف التلاعب وكان سيعلنه الليلة.»",
                "en": "Salma's voice breaks: “I altered grant entries to move money to my family's account after my brother became ill. I went out to return a folder, but Nader found the changes and planned to expose them tonight.”"
              }
            },
            "responses": {
              "calm": {
                "ar": "لا شيء أخفيه؛ طلب مني نادر ترتيب الملفات فقط.",
                "en": "I hid nothing; Nader only asked me to organize the files."
              },
              "pressing": {
                "ar": "لن أجيب عن اتهام مبني على أحرف في دفتر.",
                "en": "I will not answer an accusation based on initials in a ledger."
              },
              "sympathetic": {
                "ar": "لم أكن أريد أن يعرف المانحون أنني عبثت بالسجلات.",
                "en": "I did not want the donors to learn I had altered the records."
              }
            }
          }
        ],
        "presentReactions": {
          "p04": {
            "text": {
              "ar": "تبتعد سلمى عن البطاقة: «أنا أرسل الملفات؛ لا يعني ذلك أنني غيرت المقعد.»",
              "en": "Salma steps away from the card: “I send files; that does not mean I changed the seat.”"
            }
          },
          "p11": {
            "text": {
              "ar": "تحدق سلمى في السجل المستعاد: «كان الحساب مفتوحاً على المحطة، لا بد أن أحداً استخدمه.»",
              "en": "Salma stares at the recovered log: “The account was open at the station; someone else must have used it.”"
            }
          },
          "p09": {
            "text": {
              "ar": "تصمت سلمى لحظة: «ربما كان عليّ أن أخبركم أنني خرجت.»",
              "en": "Salma falls silent: “Perhaps I should have told you that I left.”"
            }
          }
        }
      }
    ]
  }
];
