//=============================================================================
// PoisonArmor.js
//=============================================================================

/*:ja
 * @plugindesc ver1.02 お体のほうは・・・。
 * @author まっつＵＰ
 * 
 * @param remove
 * @desc 装備の変更に成功した時、外れた装備についている
 * ノートタグのIDのステートを解除します。（付与より処理が先）
 * @type boolean
 * @default true
 *
 * @help
 * 
 * RPGで笑顔を・・・
 * 
 * このヘルプとパラメータの説明をよくお読みになってからお使いください。
 * 
 * 武器または防具のノートタグ
 * <PAadd: x>
 * xはステートID
 * 
 * <PAadd: 3>
 * このノートタグのついた装備をアクターが装備した時に
 * そのアクターにID3のステートを付加します。
 * 
 * 注意：初期装備には効果がありません。
 * 普通に装備させなおしてください。
 * 
 * このプラグインを利用する場合は
 * readmeなどに「まっつＵＰ」の名を入れてください。
 * また、素材のみの販売はダメです。
 * 上記以外の規約等はございません。
 * もちろんツクールMVで使用する前提です。
 * 何か不具合ありましたら気軽にどうぞ。
 * 
 * ver1.01　致命的なバグがあったので直しました。
 * ver1.02　ステートの解除に関する機能の追加。
 *  
 * 免責事項：
 * このプラグインを利用したことによるいかなる損害も制作者は一切の責任を負いません。
 * 
 */

(function() {
    
var parameters = PluginManager.parameters('PoisonArmor');
var PAremove = parameters['remove'] === 'true';

var _Game_Actor_changeEquip = Game_Actor.prototype.changeEquip;
Game_Actor.prototype.changeEquip = function(slotId, item) {
    var PAlastequip = this.equips()[slotId];
    _Game_Actor_changeEquip.call(this, slotId, item);
    if(PAlastequip && this.equips()[slotId] !== PAlastequip){
        this.PAremovestate(PAlastequip);
    }
    if(item && this.equips()[slotId] === item){
        this.PAaddstate(item);
    }
};

Game_Actor.prototype.PAaddstate = function(item) {
    var PAequip = this.PAcurrentstateid(item);
    if(PAequip <= 0) return;
    this.addState(PAequip);
    this.clearResult();
};

Game_Actor.prototype.PAremovestate = function(item) {
    var PAequip = this.PAcurrentstateid(item);
    if(!PAremove || PAequip <= 0) return;
    this.removeState(PAequip);
    this.clearResult();
};

Game_Actor.prototype.PAcurrentstateid = function(item) {
    if(!item) return 0;
    return Number(item.meta['PAadd'] || 0);
};

})();
