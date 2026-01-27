/**
 * 合成ロジック：抑制剤プロトタイプ
 * 成功率 = 1% + 知見Lv (変数ID:3)
 */

// --- 演出設定 ---
// 合成時
const SE_CONNECT = { name: 'Equip1', pan: 0, pitch: 100, volume: 90 };
// 成功時
const SE_SUCCESS = { name: 'Recovery', pan: 0, pitch: 120, volume: 100 };
// 失敗時
const SE_FAILURE = { name: 'Collapse1', pan: 0, pitch: 80, volume: 100 };

// --- 設定：変数とアイテムID ---
const varKnowledge = 3;  // 知見レベルの変数ID
const itemA = 1;         // 素材AのアイテムID
const itemB = 2;         // 素材BのアイテムID
const itemResult = 3;    // 完成品（抑制剤）のアイテムID

// --- データベースから名前とアイコンを取得 ---
const nameA = $dataItems[itemA].name;
const nameB = $dataItems[itemB].name;
const nameRes = $dataItems[itemResult].name;
const iconRes = $dataItems[itemResult].iconIndex; // アイコン番号

// --- 成功率の計算（基礎1% + 知見レベル） ---
let successRate = 10 + $gameVariables.value(varKnowledge);
let roll = Math.randomInt(1000); // 0〜99の乱数

// --- 共通の消費処理 ---
// 効果音を再生
AudioManager.playSe(SE_CONNECT);
// 素材Aの所持数を減少させる
$gameParty.loseItem($dataItems[itemA], 1);
// 素材Bの所持数を減少させる
$gameParty.loseItem($dataItems[itemB], 1);
// 変数4に完成品IDを代入
$gameVariables.setValue(4, itemResult);

if (roll < successRate) {
    // ---【成功時の処理】---
    $gameParty.gainItem($dataItems[itemResult], 1);
    // 成功時は多めに知見UP
    $gameVariables.setValue(varKnowledge, $gameVariables.value(varKnowledge) + 2);
    // 効果音を再生
    AudioManager.playSe(SE_SUCCESS);
    // 紫色のフラッシュ
    $gameScreen.startFlash([255,0,255,128], 20);
    // メッセージ表示
    // 背景を「暗くする」に設定（0:通常, 1:暗く, 2:透明）
    $gameMessage.setBackground(1);
    // 表示位置を「中央」に（0:上, 1:中, 2:下）
    $gameMessage.setPositionType(1);
    $gameMessage.add("【成功】\n物質の再定義を完了。");
    $gameMessage.add("\\item[\\v[4]]を生成。");
} else {
    // ---【失敗時の処理】---
    // 失敗しても経験は積む
    $gameVariables.setValue(varKnowledge, $gameVariables.value(varKnowledge) + 1);
    // 効果音を再生
    AudioManager.playSe(SE_FAILURE);
    // 紫色のフラッシュ
    $gameScreen.startFlash([255,0,255,128], 40);
    // メッセージ表示
    $gameMessage.setBackground(1);
    $gameMessage.setPositionType(1);
    $gameMessage.add("【失敗】\n演算が物理定数と乖離。");
    $gameMessage.add("素材は不気味な紫色の泥となって崩れ落ちた。");
}
