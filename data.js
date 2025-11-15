// data.js

const SETTING_DATA = [
    {
        id: "septem_dii",
        word: "七界神",
        reading: "シチカイシン",
        category: ["七界神"],
        meaning: [
            "この世界の根幹的な法則と魔法属性を司る７柱の神々の総称｡"
        ],
        updatedAt: "2025-11-15",
        details: {
            fullDescription: [
                ","
            ],
            image: ","},
        detailsArray: {
            castra: [[
                "善神（水晶神、機巧神、永光神）と悪神（煉獄神、剛勇神、混沌神）と",
                "中立神（天衝神）の３陣営に分けられる。"],""],
            sacraCaelum: [[
                "聖天暦信者は、聖変期に起きた世界的な大災害や大戦争のことを「天穹の審判」と呼ぶことから、",
                "七界神を「審判の七柱」とも呼ぶ。"],""],
            ptolemaica: [[
                "星辰暦信者は、聖変期に起きた世界的な大災害や大戦争のことを「天穹の終熄」と呼ぶことから、",
                "七界神を「終熄の七柱」とも呼ぶ。"],""],
            fides: [[
                "信仰によって呼び方や陣営が異なる。",
                "聖天暦信者は、天穹の審判で天衝神が悪神に加担して古代文明を滅亡させたとして天衝神も悪神としている。"],
                ""],
            potestas: [[
                "七界神それぞれが７つの属性（法則）、“プルチックの感情の輪”に基づく感情と「虚無」の",
                "それぞれ１ずつ司る。"],""],
            adventus: [["七界神全員での会議によって七界神が降臨する際に守らなければならないルールがある。"],""],
            
        },
        statTitle: ["七界神"],
        statHeaders: [
            "名称","読み","陣営","司る属性","司る魔法","司る感情","七つの大罪","役割"
        ],
        stats: [[
                "水晶神","スイショウシン","善神",
                "氷泉","水、氷","恐れ","嫉妬","水と氷で秩序と固定を司る"
            ],[
                "機巧神","キコウシン","善神",
                "鋼塊","土、鋼","期待","強欲","土と鋼で構築と構造を司る"
            ],[
                "永光神","エイコウシン","善神",
                "聖光","聖、光","信頼","色欲","聖なる力で生命の維持と秩序を司る"
            ],[
                "煉獄神","レンゴクシン","悪神",
                "炎熱","火、熱","怒り","憤怒","火と熱で破壊と衝動を司る"
            ],[
                "剛勇神","ゴウユウシン","悪神",
                "雷嵐","風、雷","驚き","傲慢","風と雷で運動と力の極限を司る"
            ],[
                "混沌神","コントンシン","悪神",
                "邪悪","邪、闇","嫌悪","暴食","邪な力で法則の変質と闇を司る"
            ],[
                "天衝神","テンショウシン","中立神",
                "時空","無、空","虚無","怠惰","世界の法則そのものと魔空を司る"
            ]
        ]
    },
    {
        id: "deus_sanitatem", 
        word: "永光神",
        reading: "エイコウシン",
        category: ["七界神", "救世神（善神）"],
        meaning: [
            "生命の維持と循環、魔力の安定を司る。"
        ],
        updatedAt: "2025-11-13",
        details: {
            attribute: "司つ魔法は「治癒」",
            magicae: "主要魔法属性は「光」",
            motus: "司る感情は「慈愛」",
            bontmal: "救世神（善神）",
            fullDescription: [
                "生命の維持と循環、魔力の安定を司る。",
                "生命倫理の根幹。"
            ],
            image: ","
        }
    },
    {
        id: "deus_crystallum", 
        word: "水晶神",
        reading: "スイショウシン",
        category: ["七界神", "救世神（善神）"],
        meaning: [
            "論理、精密性、知識（魔遺）の維持を司る。"
        ],
        updatedAt: "2025-11-13",
        details: {
            attribute: "司る魔法は「氷結」",
            magicae: "主要魔法属性は「水」",
            motus: "司る感情は「冷静」",
            bontmal: "救世神（善神）",
            fullDescription: [
                "論理、精密性、知識（魔遺）の維持を司る。",
                "機巧神と連携し技術を支える。"
            ],
            image: ","
        }
    },
    {
        id: "deus_chalybe", 
        word: "機巧神",
        reading: "キコウシン",
        category: ["七界神", "救世神（善神）"],
        meaning: [
            "技術の発展と資源（魔脈）の最適化を司る。"
        ],
        updatedAt: "2025-11-13",
        details: {
            attribute: "司る魔法は「鋼鉄」",
            magicae: "主要魔法属性は「地」",
            motus: "司る感情は「追求」",
            bontmal: "救世神（善神）",
            fullDescription: [
                "技術の発展と資源（魔脈）の最適化を司る。",
                "蒸気機関技術の根幹。"
            ],
            image: ","
        }
    },
    {
        id: "deus_infernus", 
        word: "炎熱神",
        reading: "エンネツシン",
        category: ["七界神", "破壊神（悪神）"],
        meaning: [
            "破壊、熱量を司る。"
        ],
        updatedAt: "2025-11-13",
        details: {
            attribute: "司る魔法は「業火」",
            magicae: "主要魔法属性は「火」",
            motus: "司る感情は「熱狂」",
            bontmal: "破壊神（悪神）",
            fullDescription: [
                "破壊、熱量を司る。",
                "魔脈の暴走と、天穹の終熄（審判）を始めた神の１柱。"
            ],
            image: ","
        }
    },
    /*
    {
        id: "sample_word", 
        word: "単語名",
        reading: "ヨミガナ",
        category: ["カテゴリー"],
        meaning: ["概要","説明","だお♪"],
        updatedAt: "2025-11-12",
        details: {
            alpha: "このように",
            beta: "好きなように",
            gamma: "項目ごとに",
            delta: "細分化して",
            epsilon: "説明できる。",
            fullDescription: ["詳細","説明は","区切っても","問題なし！"],
            image: "images/sample01.jpeg" // 実際の画像名に置き換えてください
        }
    },
    {
        id: "arc_blaze", 
        word: "[Sample]アーク・ブレイズ",
        reading: "アークブレイズ",
        category: ["主要人物", "主人公"],
        meaning: "滅びた古代王国の末裔。記憶を失った状態で発見された、物語の主人公。",
        updatedAt: "2025-11-01",
        details: {
            age: "17歳",
            race: "ヒューマン",
            affiliation: "自由探索者",
            favoriteSkill: "炎剣術",
            fullDescription: "古代王国の遺産である『原初の炎』をその身に宿している。普段は温厚だが、仲間を傷つけられると感情が爆発する。",
            image: "placeholder_character.jpg" // 実際の画像名に置き換えてください
        }
    },
    {
        id: "shrine_of_light",
        word: "[Sample]光の聖域",
        reading: "ヒカリノセイイキ",
        category: ["地理", "聖地", "遺跡"],
        meaning: "世界樹の根元に存在する、古代文明の遺跡。強い魔力が満ちている。",
        updatedAt: "2025-10-25",
        details: {
            location: "エリシウム大陸 北東部",
            guardian: "聖獣ライオネル",
            status: "封印状態",
            fullDescription: "数百年前の大戦で強大な力が暴走したため、時の賢者たちによって厳重に封印された場所。物語の鍵となる場所。",
            image: "placeholder_location.jpg"
        }
    },
    {
        id: "flame_sword",
        word: "[Sample]炎剣術",
        reading: "ホノオノケンジュツ",
        category: ["システム", "スキル", "炎属性"],
        meaning: "炎の魔力を剣に纏わせる剣術。アークが最も得意とする。",
        updatedAt: "2025-11-10",
        details: {
            skillType: "近接攻撃",
            cost: "MP 30",
            effect: "敵単体に炎属性の特大ダメージ。低確率で火傷効果。",
            fullDescription: "主人公アークが生まれ持った炎の力を使うための術。修行によってレベルアップさせることが可能。",
            image: "placeholder_skill.png"
        }
    }
    */
];