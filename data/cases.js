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
  }
];
