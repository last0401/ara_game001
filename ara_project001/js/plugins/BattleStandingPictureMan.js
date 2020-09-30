/*:
 * @plugindesc Manage the standing picture of the game characters when on the battle.
 * @target MZ
 * @author manapia
 *
 * @help
 * StandingPictureMan v1.1.3
 * Released at 2020.9.21
 *
 * @param patterns
 * @text Patterns
 * @desc The patterns of the standing pictures that interact with battle situation.
 * @type struct<StandingPicturePattern>[]
 */
/*:ja
 * @plugindesc 戦闘時のゲームキャラクターの立ち絵を管理します。
 * @target MZ
 * @author manapia
 *
 * @help
 * StandingPictureMan v1.1.3
 * Released at 2020.9.21
 *
 * @param patterns
 * @text パターン
 * @desc 戦闘状況に対応した立ち絵のパターン
 * @type struct<StandingPicturePattern>[]
 */

/*~struct~StandingPicturePattern:
 *
 * @param actorId
 * @text Actor
 * @desc A target actorId
 * @type actor
 *
 * @param conditions
 * @text Condition
 * @desc Condition of using this setting.
 * @type struct<StandingPicturePatternCondition>[]
 * @default []
 *
 * @param picture
 * @text Standing Picture
 * @desc A file of the standing picture
 * @type file
 * @dir img/pictures
 *
 * @pictureId
 * @text Picture ID
 * @desc The picture ID
 *
 * @param poxX
 * @text X axis position on the game screen.
 * @type number
 *
 * @param posY
 * @text Y axis position on the game screen.
 * @type number
 *
 * @param scaleX
 * @text Scale in the X axis direction.
 * @type number
 * @default 100
 *
 * @param scaleY
 * @text Scale in the Y axis direction.
 * @type number
 * @default 100
 *
 * @param opacity
 * @text Alpha
 * @desc Valid between 0 (transparent) and 255 (opaque).
 * @type number
 * @default 0
 * @min 0
 * @max 255
 */
/*~struct~StandingPicturePattern:ja
 *
 * @param actorId
 * @text アクター
 * @desc 対象のアクター
 * @type actor
 *
 * @param conditions
 * @text 条件
 * @desc この設定が使用される条件
 * @type struct<StandingPicturePatternCondition>[]
 * @default []
 *
 * @param picture
 * @text 立ち絵
 * @desc 表示する立ち絵
 * @type file
 * @dir img/pictures
 *
 * @param pictureId
 * @text ピクチャID
 * @desc 表示するピクチャのID
 * @type number
 * @min 1
 *
 * @param posX
 * @text X座標
 * @desc ゲームスクリーン上のX座標
 * @type number
 * @default 0
 *
 * @param posY
 * @text Y座標
 * @desc ゲームスクリーン上のY座標
 * @type number
 * @default 0
 *
 * @param scaleX
 * @text X軸方向の拡大率
 * @type number
 * @default 100
 *
 * @param scaleY
 * @text Y軸方向の拡大率
 * @type number
 * @default 100
 *
 * @param opacity
 * @text 不透明度
 * @desc 0（透明）から255（不透明）の間で指定できます
 * @type number
 * @default 255
 * @min 0
 * @max 255
 */

/*~struct~StandingPicturePatternCondition:
 *
 * @param kind
 * @text Kind
 * @desc Types of conditions to set.
 * @type select
 * @option Switch
 * @value switch
 * @option Variable
 * @value variable
 * @option Percentage of HP
 * @value hp-percentage
 * @option Percentage of MP
 * @value mp-percentage
 * @option State
 * @value state
 *
 * @param negative
 * @text Invert this condition
 * @desc 設定すると、条件を満たしていない場合にこのパターンが選択されます
 * @type boolean
 *
 * @param targetSwitch
 * @text Target switch
 * @desc This condition will be true when the "Kind" parameter set to "Switch" and the game switch that specified in this value is the same as to "switchCondition" value.
 * @type switch
 *
 * @param switchCondition
 * @text Switch value
 * @desc The switch value.
 * @type boolean
 *
 * @param targetVariable
 * @text Target variable
 * @desc This condition will be true when the "Kind" parameter set to "variable" and the game variable that specified in this value is meet the conditions "isEqual," "gte," and "lte."
 * @type variable
 *
 * @param isEqual
 * @text イコール（=）
 * @desc This condition will be true when the game variable specified in "targetVariable" parameter is the same to this value.
 * @type: number
 *
 * @param gte
 * @text Greater than or equal（>=）
 * @desc This condition will be true when the game variable specified in "targetValue" parameter is the same or greater than this value.
 * @type number
 *
 * @param lte
 * @text Less than or equal（<=）
 * @desc This condition will be true when the game variable specified in "targetValue" parameter is the same or less than this value.
 *
 * @param targetState
 * @text Target state
 * @desc This condition will be true when the "Kind" parameter sets to "State" and the actorId is affected by this value.
 * If not set, this condition will be true when an actor is not affected by any state.
 * However, if you set any state to the other condition for this actor, check only theirs.
 * @type state
 */
/*~struct~StandingPicturePatternCondition:ja
 *
 * @param kind
 * @text 種類
 * @desc 設定する条件の種類
 * @type select
 * @option スイッチ
 * @value switch
 * @option 変数
 * @value variable
 * @option HP割合
 * @value hp-percentage
 * @option MP割合
 * @value mp-percentage
 * @option ステート
 * @value state
 *
 * @param negative
 * @text 条件を反転する
 * @desc 設定すると、条件を満たしていない場合にこのパターンが選択されます
 * @type boolean
 *
 * @param targetSwitch
 * @text 対象のスイッチ
 * @desc 条件の種類がスイッチに設定されている状態で、対象のスイッチが、スイッチの値でセットした値と同じだと有効になります
 * @type switch
 *
 * @param switchCondition
 * @text スイッチの値
 * @desc スイッチの値
 * @type boolean
 *
 * @param targetVariable
 * @text 対象の変数
 * @desc 条件の種類が変数に設定されている状態で、対象の変数が、イコール、以上、または以下の条件を満たすと有効になります
 * @type variable
 *
 * @param isEqual
 * @text イコール（=）
 * @desc 変数の値が、セットした値と同じときに条件を満たします
 * @type: number
 *
 * @param gte
 * @text 以上（>=）
 * @desc 変数の値が、セットした値より大きいか、同じときに条件を満たします
 * @type number
 *
 * @param lte
 * @text 以下（<=）
 * @desc 変数の値が、セットした値よりも小さいか、同じ時に条件を満たします
 *
 * @param targetState
 * @text 対象のステート
 * @desc 条件の種類がステートに設定されている状態で、対象のアクターが、このステートにかかっている状態だと有効になります
 * 設定しない場合は、アクターがいずれのステートにもかかっていない場合に有効になります。
 * ただし、このアクターに対する他の条件に、なんらかのステートが指定されている場合、それらのみがチェックされます。
 * @type state
 */
(() => {
  class PatternCondition {
    constructor(actorId, obj) {
      /** @type number */
      this.actorId = actorId;

      /** @type string */
      this.kind = obj.kind;

      /** @type boolean */
      this.negative = typeof obj.negative == "boolean" ? obj.negative : false;

      /** @type number */
      this.targetSwitch = typeof obj.targetSwitch === 'number' ? obj.targetSwitch : null;

      /** @type boolean */
      this.switchCondition = typeof obj.switchCondition == "boolean" ? obj.switchCondition : null;

      /** @type number */
      this.targetVariable = typeof obj.targetVariable === 'number' ? obj.targetVariable : null;

      /** @type number */
      this.isEqual = typeof obj.isEqual === 'number' ? obj.isEqual : null;

      /** @type number */
      this.gte = typeof obj.gte === 'number' ? obj.gte : null;

      /** @type number */
      this.lte = typeof obj.lte === 'number' ? obj.lte : null;

      /** @type number */
      this.targetState = typeof obj.targetState === 'number' ? obj.targetState : null;
    }

    /**
     * @return boolean
     */
    evaluate() {
      let result = false;

      switch (this.kind) {
        case 'switch':
          result = this.switchCondition === $gameSwitches.value(this.targetSwitch);
          break;
        case 'variable':
          result = this.compare($gameVariables.value(this.targetVariable));
          break;
        case 'hp-percentage':
          result = this.compare($gameActors.actor(this.actorId).hpRate() * 100);
          break;
        case 'mp-percentage':
          result = this.compare($gameActors.actor(this.actorId).mpRate() * 100);
          break;
        case 'state':
          if (this.targetState == null && _specifiedStates.has(this.actorId)) {
            const specifiedMap = _specifiedStates.get(this.actorId);
            result = $gameActors.actor(this.actorId).states().every((s) => !specifiedMap.has(s.id));
          }
          else {
            result = $gameActors.actor(this.actorId).isStateAffected(this.targetState);
          }
          break;
        default:
          return false;
      }

      if (this.negative) {
        result = !result;
      }
      return result;
    }

    /**
     * @param value
     * @return boolean
     */
    compare(value) {
      if (this.isEqual != null) {
        return value === this.isEqual;
      }
      if (this.gte != null) {
        return value >= this.gte;
      }
      if (this.lte != null) {
        return value <= this.lte;
      }
      return false;
    }
  }

  class StandingPicturePattern {
    constructor(id, obj) {
      this.id = id;

      /** @type number */
      this.actorId = obj.actorId;

      /** @type PatternCondition[] */
      this.conditions = obj.conditions.map((e) => new PatternCondition(this.actorId, e));

      /** @type string */
      this.picture = obj.picture;

      /** @type number */
      this.pictureId = obj.pictureId;

      /** @type number */
      this.posX = typeof obj.posX == 'number' ? obj.posX : 0;

      /** @type number */
      this.posY = typeof obj.posY == 'number' ? obj.posY : 0;

      /** @type number */
      this.scaleX = typeof obj.scaleX == 'number' ? obj.scaleX : 100;

      /** @type number */
      this.scaleY = typeof obj.scaleY == 'number' ? obj.scaleY : 100;

      /** @type number */
      this.opacity = typeof obj.opacity == 'number' ? obj.opacity : 255;
    }

    show() {
      $gameScreen.showPicture(
          this.pictureId,
          this.picture,
          0,
          this.posX,
          this.posY,
          this.scaleX,
          this.scaleY,
          this.opacity,
          0,
      );
    }

    erase() {
      $gameScreen.erasePicture(this.pictureId);
    }
  }

  const _BattleManager_startBattle = BattleManager.startBattle;
  const _BattleManager_endBattle = BattleManager.endBattle;
  const _BattleManager_updateEventMain = BattleManager.updateEventMain;

  /** @type Game_Actor[] */
  const _partyMembers = [];

  /** @type Map<number, StandingPicturePattern> */
  const _showingPatterns = new Map();

  /** @type Map<number, Map<number, null>> */
  const _specifiedStates = new Map();

  let inBattle = false;

  const _pluginParameters = _initializePluginParameters();
  _initializeSpecifiedStates();

  BattleManager.startBattle = function () {
    const superResult = _BattleManager_startBattle.apply(this, arguments);
    inBattle = true;
    updateBattleMembers();
    updateStandingPictures();
    return superResult;
  }

  BattleManager.endBattle = function () {
    const superResult = _BattleManager_endBattle.apply(this, arguments);
    inBattle = false;
    eraseAllStandingPictures();
    return superResult;
  }

  BattleManager.updateEventMain = function () {
    const superResult = _BattleManager_updateEventMain.apply(this, arguments);
    if (!inBattle) {
      return superResult;
    }

    updateStandingPictures();
    return superResult;
  }

  /**
   * 戦闘に参加しているパーティメンバーの情報を更新する
   */
  function updateBattleMembers() {
    _partyMembers.splice(0, _partyMembers.length);

    const allBattleMembers = BattleManager.allBattleMembers();
    _partyMembers.push(...allBattleMembers.filter((member) => member.isActor()));
  }

  /**
   * 立ち絵を更新する
   */
  function updateStandingPictures() {
    _partyMembers.forEach((actor) => _updateActorStandingPicture(actor));
  }

  function eraseAllStandingPictures() {
    _showingPatterns.forEach((pattern) => {
      pattern.erase();
    });
    _showingPatterns.clear();
  }

  /**
   * プラグインの設定を読み込む
   * @return {StandingPicturePattern[]}
   * @private
   */
  function _initializePluginParameters() {
    const parameter = PluginManagerEx.createParameter(document.currentScript);
    if (!parameter.hasOwnProperty('patterns') || !Array.isArray(parameter.patterns)) {
      return [];
    }

    const result = [];

    const patterns = parameter.patterns;
    let id = 0;
    for (let pattern of patterns) {
      result.push(new StandingPicturePattern(id++, pattern));
    }

    return result;
  }

  /**
   * アクターごとに条件に指定されているステートのリストを初期化します
   * @private
   */
  function _initializeSpecifiedStates() {
    _specifiedStates.clear();

    _pluginParameters.forEach((pattern) => {
      const stateIdList = pattern.conditions
          .filter((c) => c.kind === 'state' && c.targetState != null)
          .map((c) => c.targetState);

      if (stateIdList.length === 0) {
        return;
      }

      if (!_specifiedStates.has(pattern.actorId)) {
        _specifiedStates.set(pattern.actorId, new Map());
      }

      const targetMap = _specifiedStates.get(pattern.actorId);
      stateIdList.forEach((stateId) => targetMap.set(stateId, null));
    });
  }

  /**
   * 指定したアクターの立ち絵を更新する
   * @param actor {Game_Actor}
   * @private
   */
  function _updateActorStandingPicture(actor) {
    let lastPattern;
    const actorId = actor.actorId();

    for (let pattern of _pluginParameters) {
      if (pattern.actorId !== actorId) {
        continue;
      }
      lastPattern = pattern;

      if (pattern.conditions.length === 0 || pattern.conditions.every((c) => c.evaluate())) {
        _applyPatternToActor(actorId, pattern);
        return;
      }
    }

    // 条件を満たさなかった場合はフォールバック
    if (lastPattern != null) {
      _applyPatternToActor(actorId, lastPattern);
    }
  }

  /**
   * 指定したアクターの立ち絵を表示する
   * @param actorId
   * @param pattern
   * @private
   */
  function _applyPatternToActor(actorId, pattern) {
    const previousPattern = _showingPatterns.get(actorId);
    if (previousPattern != null && previousPattern.pictureId !== pattern.pictureId) {
      previousPattern.erase();
    }

    _showingPatterns.set(actorId, pattern);
    pattern.show();
  }
})();
