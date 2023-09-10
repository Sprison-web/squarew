define("@square/ember-multipass-components/components/ember-multipass-components/two-factor/modals/disable-confirm", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
roposal-class-properties is enabled and runs after the decorators transform.'); }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'p
  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <template {{open-modal}}>
    <market-modal-partial {{on "marketDialogDismissed" @close}} class="two-factor-modal two-factor-modal-disable-confirm">
      <market-header class="two-factor-modal-market-header">
        <market-button
          data-test-two-factor-modal-disable-confirm-cancel
          rank="secondary"
          slot="actions"
          class="two-factor-modal-disable-confirm-cancel"
          {{on "click" this.close}}
        >
          {{t-intl (concat @tPrefix "two_factor_modals.disable_confirm.cancel")}}
        </market-button>
        <market-button
          data-test-two-factor-modal-disable-confirm-disable
          rank="primary"
          variant="destructive"
          slot="actions"
          class="two-factor-modal-disable-confirm-disable"
          isLoading={{this.loading}}
          {{on "click" this.disable}}
        >
          {{t-intl (concat @tPrefix "two_factor_modals.disable_confirm.turn_off")}}
        </market-button>
      </market-header>
      <main>
        <h2 data-test-two-factor-modal-disable-confirm-heading class="two-factor-modal-heading">
          {{t-intl (concat @tPrefix "two_factor_modals.disable_confirm.heading")}}
        </h2>
        <p data-test-two-factor-modal-disable-confirm-subheading class="two-factor-modal-subheading paragraph-30">
          {{t-intl (concat @tPrefix "two_factor_modals.disable_confirm.subheading")}}
        </p>
      </main>
    </market-modal-partial>
  </template>
  
  */
  {
    "id": "9snC6Fr/",
    "block": "[[[11,\"template\"],[4,[38,0],null,null],[12],[1,\"\\n  \"],[11,\"market-modal-partial\"],[24,0,\"two-factor-modal two-factor-modal-disable-confirm\"],[4,[38,1],[\"marketDialogDismissed\",[30,1]],null],[12],[1,\"\\n    \"],[10,\"market-header\"],[14,0,\"two-factor-modal-market-header\"],[12],[1,\"\\n      \"],[11,\"market-button\"],[24,\"data-test-two-factor-modal-disable-confirm-cancel\",\"\"],[24,\"rank\",\"secondary\"],[24,\"slot\",\"actions\"],[24,0,\"two-factor-modal-disable-confirm-cancel\"],[4,[38,1],[\"click\",[30,0,[\"close\"]]],null],[12],[1,\"\\n        \"],[1,[28,[35,2],[[28,[37,3],[[30,2],\"two_factor_modals.disable_confirm.cancel\"],null]],null]],[1,\"\\n      \"],[13],[1,\"\\n      \"],[11,\"market-button\"],[24,\"data-test-two-factor-modal-disable-confirm-disable\",\"\"],[24,\"rank\",\"primary\"],[24,\"variant\",\"destructive\"],[24,\"slot\",\"actions\"],[24,0,\"two-factor-modal-disable-confirm-disable\"],[16,\"isLoading\",[30,0,[\"loading\"]]],[4,[38,1],[\"click\",[30,0,[\"disable\"]]],null],[12],[1,\"\\n        \"],[1,[28,[35,2],[[28,[37,3],[[30,2],\"two_factor_modals.disable_confirm.turn_off\"],null]],null]],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"main\"],[12],[1,\"\\n      \"],[10,\"h2\"],[14,\"data-test-two-factor-modal-disable-confirm-heading\",\"\"],[14,0,\"two-factor-modal-heading\"],[12],[1,\"\\n        \"],[1,[28,[35,2],[[28,[37,3],[[30,2],\"two_factor_modals.disable_confirm.heading\"],null]],null]],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,2],[14,\"data-test-two-factor-modal-disable-confirm-subheading\",\"\"],[14,0,\"two-factor-modal-subheading paragraph-30\"],[12],[1,\"\\n        \"],[1,[28,[35,2],[[28,[37,3],[[30,2],\"two_factor_modals.disable_confirm.subheading\"],null]],null]],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"@close\",\"@tPrefix\"],false,[\"open-modal\",\"on\",\"t-intl\",\"concat\"]]",
    "moduleName": "@square/ember-multipass-components/components/ember-multipass-components/two-factor/modals/disable-confirm.hbs",
    "isStrictMode": false
  });

  let TwoFactorModalDisableConfirmComponent = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, _dec3 = Ember.inject.service('ember-multipass-logging'), _dec4 = Ember.inject.service('ember-multipassfe-client'), _dec5 = Ember._tracked, _dec6 = Ember._action, _dec7 = Ember._action, _dec8 = Ember._action, (_class = class TwoFactorModalDisableConfirmComponent extends _component.default {
    get toastsDisabledTLabel() {
      return 'two_factor_modals.toasts.disabled';
    }

    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "intl", _descriptor, this);

      _initializerDefineProperty(this, "marketToasts", _descriptor2, this);

      _initializerDefineProperty(this, "logger", _descriptor3, this);

      _initializerDefineProperty(this, "multipassfeClient", _descriptor4, this);

      _initializerDefineProperty(this, "loading", _descriptor5, this);
    }

    async disable() {
      try {
        this.loading = true;
        await this.multipassfeClient.disablePersonTwoFactorRequirement();
        this.marketToasts.success(this.intl.t(this.args.tPrefix + this.toastsDisabledTLabel));
        this.closeAllModals();
      } catch (e) {
        this.logger.error('Failed to disable two factor', e);
      } finally {
        this.loading = false;
      }
    }

    close() {
      this.args.close();
    }

    closeAllModals() {
      this.args.closeAllModals();
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "intl", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "marketToasts", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "logger", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "multipassfeClient", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "loading", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "disable", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "disable"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "close", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "close"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "closeAllModals", [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, "closeAllModals"), _class.prototype)), _class));
  _exports.default = TwoFactorModalDisableConfirmComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, TwoFactorModalDisableConfirmComponent);
});