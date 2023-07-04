(self.webpackChunk_wayalay_inputs_source=self.webpackChunk_wayalay_inputs_source||[]).push([[722],{"./inputs/src/lib/components/checkbox/checkbox.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>CheckboxComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,CheckboxComponent_1,input_statengResource=__webpack_require__("./inputs/src/lib/assets/styles/input-state.scss?ngResource"),input_statengResource_default=__webpack_require__.n(input_statengResource),checkbox_componentngResource=__webpack_require__("./inputs/src/lib/components/checkbox/checkbox.component.scss?ngResource"),checkbox_componentngResource_default=__webpack_require__.n(checkbox_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),validation_messages_component=__webpack_require__("./inputs/src/lib/validation-messages/validation-messages.component.ts"),valueAccessorBase=__webpack_require__("./inputs/src/lib/models/valueAccessorBase.ts");let CheckboxComponent=((_class=class CheckboxComponent extends valueAccessorBase.H{constructor(){super(...arguments),this.label=""}toggle(value){this.writeValue(!value),this.control.markAsTouched()}}).propDecorators={label:[{type:core.Input,args:[{required:!0}]}]},CheckboxComponent_1=_class);CheckboxComponent=CheckboxComponent_1=(0,tslib_es6.gn)([(0,core.Component)({selector:"wayalay-inputs-checkbox",standalone:!0,imports:[common.CommonModule,fesm2022_forms.u5,validation_messages_component.s,fesm2022_forms.UX],template:'<div class="container">\n  <div class="label-wrapper">\n    <label [for]="label">{{label}}</label>\n  </div>\n  <div class="input-wrapper">\n    <input [id]="label" [formControl]="control" [required]="isRequired" type="checkbox" #input/>\n    <span class="checkmark" (click)="toggle(input.checked)"></span>\n  </div>\n  </div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,providers:[{provide:fesm2022_forms.JU,useExisting:CheckboxComponent_1,multi:!0}],styles:[input_statengResource_default(),checkbox_componentngResource_default()]})],CheckboxComponent)},"./inputs/src/lib/components/password-input/password.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>PasswordInputComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,PasswordInputComponent_1,inputngResource=__webpack_require__("./inputs/src/lib/assets/styles/input.scss?ngResource"),inputngResource_default=__webpack_require__.n(inputngResource),password_componentngResource=__webpack_require__("./inputs/src/lib/components/password-input/password.component.scss?ngResource"),password_componentngResource_default=__webpack_require__.n(password_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),validation_messages_component=__webpack_require__("./inputs/src/lib/validation-messages/validation-messages.component.ts"),valueAccessorBase=__webpack_require__("./inputs/src/lib/models/valueAccessorBase.ts");let PasswordInputComponent=((_class=class PasswordInputComponent extends valueAccessorBase.H{constructor(){super(...arguments),this.label="",this.type="password"}onMakePasswordVisible(){this.type="password"===this.type?"text":"password"}}).propDecorators={label:[{type:core.Input,args:[{required:!0}]}]},PasswordInputComponent_1=_class);PasswordInputComponent=PasswordInputComponent_1=(0,tslib_es6.gn)([(0,core.Component)({selector:"wayalay-inputs-password",standalone:!0,imports:[common.CommonModule,fesm2022_forms.u5,validation_messages_component.s,fesm2022_forms.UX,common.NgFor],template:'<div class="container">\n  <div class="label-wrapper">\n    <label [for]="label">{{label}}</label>\n    <wayalay-inputs-validation-messages \n    *ngIf="control.touched && control.invalid" [errors]="control.errors"></wayalay-inputs-validation-messages>\n  </div>\n  <div class="input-wrapper">\n    <input [id]="label" [formControl]="control" [required]="isRequired" [type]="type" autocomplete=""/>\n    <button *ngIf="control.value?.length" (click)="onMakePasswordVisible()"></button>\n  </div>\n  </div>',changeDetection:core.ChangeDetectionStrategy.OnPush,providers:[{provide:fesm2022_forms.JU,useExisting:PasswordInputComponent_1,multi:!0}],styles:[inputngResource_default(),password_componentngResource_default()]})],PasswordInputComponent)},"./src/stories/widgets/sign-in.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ClickDifferentLinks:()=>ClickDifferentLinks,FillForm:()=>FillForm,InvalidPassword:()=>InvalidPassword,InvalidPhone:()=>InvalidPhone,SingIn:()=>SingIn,default:()=>sign_in_component_stories});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,sign_in_componentngResource=__webpack_require__("./widgets/src/lib/sign-in/sign-in.component.scss?ngResource"),sign_in_componentngResource_default=__webpack_require__.n(sign_in_componentngResource),config=__webpack_require__("./inputs/src/lib/components/phone/config.ts"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),button_component=__webpack_require__("./components/src/lib/components/button/button.component.ts"),header_componentngResource=__webpack_require__("./components/src/lib/components/header/header.component.scss?ngResource"),header_componentngResource_default=__webpack_require__.n(header_componentngResource);let HeaderComponent=((_class=class HeaderComponent{}).propDecorators={translated:[{type:core.Input}]},_class);HeaderComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"wayalay-components-header",standalone:!0,imports:[common.CommonModule,fesm2022_forms.UX],template:"<h2>{{translated.header}}</h2>",changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[header_componentngResource_default()]})],HeaderComponent);var sub_text_component_class,sub_text_componentngResource=__webpack_require__("./components/src/lib/components/sub-text/sub-text.component.scss?ngResource"),sub_text_componentngResource_default=__webpack_require__.n(sub_text_componentngResource);let SubTextComponent=((sub_text_component_class=class SubTextComponent{}).propDecorators={translated:[{type:core.Input}]},sub_text_component_class);SubTextComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"wayalay-components-sub-text",standalone:!0,imports:[common.CommonModule,fesm2022_forms.UX],template:"<span>{{translated.text}}</span>",changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[sub_text_componentngResource_default()]})],SubTextComponent);var sign_in_component_class,password_component=__webpack_require__("./inputs/src/lib/components/password-input/password.component.ts"),checkbox_component=__webpack_require__("./inputs/src/lib/components/checkbox/checkbox.component.ts"),phone_component=__webpack_require__("./inputs/src/lib/components/phone/phone.component.ts");let SignInComponent=((sign_in_component_class=class SignInComponent{constructor(){this.fb=(0,core.inject)(fesm2022_forms.qu),this.signInEmitter=new core.EventEmitter,this.googleSignInEmitter=new core.EventEmitter,this.registryEmmiter=new core.EventEmitter,this.forgetPasswordEmitter=new core.EventEmitter,this.config={phone:["",[this.requredValidation.bind(this)]],password:["",this.requredValidation.bind(this)],rememberMe:[!1]},this.patterns={[config.a.Belarus]:/^[+]?[(]?375[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/,[config.a.Lithianua]:/^[+]?[(]?370[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/,[config.a.Poland]:/(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/,[config.a.Ukraine]:/^(?:\+38)?(?:\(044\)[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[0-9]{7})$/},this.phoneValidators={[config.a.Belarus]:[this.patternValidation(this.patterns[config.a.Belarus]).bind(this),this.requredValidation.bind(this)],[config.a.Lithianua]:[this.patternValidation(this.patterns[config.a.Lithianua]).bind(this),this.requredValidation.bind(this)],[config.a.Poland]:[this.patternValidation(this.patterns[config.a.Poland]).bind(this),this.requredValidation.bind(this)],[config.a.Ukraine]:[this.patternValidation(this.patterns[config.a.Ukraine]).bind(this),this.requredValidation.bind(this)]},this.form=this.createForm()}signIn(){this.signInEmitter.emit(this.form.value)}googleSignIn(){this.googleSignInEmitter.emit()}forgetPassword(){this.forgetPasswordEmitter.emit()}registry(){this.registryEmmiter.emit()}createForm(){return this.fb.group(this.config)}requredValidation(control){return control.value?null:{[this?.translated?.requredFieldError]:!0}}patternValidation(pattern){const patternValidator=fesm2022_forms.kI.pattern(pattern);return control=>{const patternError=this.translated?.phonePatternError;return patternValidator(control)?{[patternError]:!0}:null}}}).ctorParameters=()=>[],sign_in_component_class.propDecorators={translated:[{type:core.Input,args:[{required:!0}]}],signInEmitter:[{type:core.Output}],googleSignInEmitter:[{type:core.Output}],registryEmmiter:[{type:core.Output}],forgetPasswordEmitter:[{type:core.Output}]},sign_in_component_class);SignInComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"wayalay-inputs-widgets",standalone:!0,imports:[common.CommonModule,router.Bz,fesm2022_forms.u5,fesm2022_forms.UX,password_component.C,checkbox_component.b,phone_component.T,button_component.r,HeaderComponent,SubTextComponent],template:'<div class="widget-container">\n    <div class="widget-header">\n        <wayalay-components-header [translated]="{header: translated.header}"></wayalay-components-header>\n        <wayalay-components-sub-text [translated]="{text: translated.subheader}"></wayalay-components-sub-text>\n    </div>\n    \n\n    <form [formGroup]="form" class="form">\n        <div class="form-content">\n            <wayalay-inputs-password [label]="translated.passwordInputLabel" formControlName="password" [id]="\'surename\'"></wayalay-inputs-password>\n    \n            <wayalay-inputs-phone \n            [label]="translated.phoneInputLabel" \n            formControlName="phone" \n            [id]="\'phone\'" \n            [placeholder]="translated.phoneInputPlaceholder"\n            [validators]="phoneValidators"\n            ></wayalay-inputs-phone>\n            <div class="controls controls-between"> \n                <div class="controls controls-single">    \n                    <wayalay-inputs-checkbox label="rememberMe" formControlName="rememberMe"></wayalay-inputs-checkbox> \n                    <span>{{translated.rememberMeInputLabel}}</span>\n                </div>\n                <wayalay-components-button (click)="forgetPassword()" [type]="\'link\'" [translatedLabel]="translated.forgetPassword"></wayalay-components-button>\n            </div>\n        </div>\n        <wayalay-components-button \n            class="widget-form submit"\n            type="submit" \n            (click)="signIn()" \n            [disabled]="form.pending || form.invalid"\n            [translatedLabel]="translated.signIn"\n            ></wayalay-components-button>\n    \n            \n        <wayalay-components-button (click)="googleSignIn()" [type]="\'secondary\'" [translatedLabel]="translated.googleSignIn" [size]="\'md\'"></wayalay-components-button>\n    </form>\n\n    <div class="controls controls-center controls-single-space">\n        <span>{{translated.registrationAccentText}}</span> \n        <wayalay-components-button (click)="registry()" [type]="\'link\'" [translatedLabel]="translated.registration"></wayalay-components-button>\n    </div>\n</div>',styles:[sign_in_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[])],SignInComponent);var dist=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs"),esm=__webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js");const translated={header:"Добро пожаловать",subheader:"Пожалуйста, введите Ваши данные",phoneInputLabel:"Номер телефона",phoneInputPlaceholder:"Выберите страну абонента",passwordInputLabel:"Пароль",rememberMeInputLabel:"Запомнить меня",forgetPassword:"Забыли пароль",signIn:"Войти",googleSignIn:"Войти с помощью google",registration:"Зарегистрируйтесь",registrationAccentText:"У Вас нет аккаунта? Тогда просто ",requredFieldError:"Обязательное поле",phonePatternError:"Неверный формат номера"},sign_in_component_stories={title:"Sign In",component:SignInComponent,argTypes:{googleSignInEmitter:{action:"googleSignInEmitter"},registryEmmiter:{action:"registryEmmiter"},forgetPasswordEmitter:{action:"forgetPasswordEmitter"},signInEmitter:{action:"signInEmitter"}},args:{translated}},FillForm={play:(_ref=(0,asyncToGenerator.Z)((function*({args,canvasElement,step}){const canvas=(0,dist.uh)(canvasElement);yield function fillForm(_x22,_x23,_x24){return _fillForm.apply(this,arguments)}(step,canvas,args)})),function play(_x){return _ref.apply(this,arguments)})};var _ref;const ClickDifferentLinks={play:(_ref2=(0,asyncToGenerator.Z)((function*({args,canvasElement,step}){const canvas=(0,dist.uh)(canvasElement);yield function loginWithGoogle(_x13,_x14,_x15){return _loginWithGoogle.apply(this,arguments)}(step,canvas,args),yield function forgetPassword(_x16,_x17,_x18){return _forgetPassword.apply(this,arguments)}(step,canvas,args),yield function registry(_x19,_x20,_x21){return _registry.apply(this,arguments)}(step,canvas,args)})),function play(_x2){return _ref2.apply(this,arguments)})};var _ref2;const InvalidPassword={play:(_ref3=(0,asyncToGenerator.Z)((function*({canvasElement,step}){const canvas=(0,dist.uh)(canvasElement);yield function typeWeakPassword(_x5,_x6){return _typeWeakPassword.apply(this,arguments)}(step,canvas),yield function leftEmptyPassword(_x7,_x8){return _leftEmptyPassword.apply(this,arguments)}(step,canvas);const submit=yield getSubmitBtn(canvas);(0,esm.l)(submit.disabled).toBeTruthy()})),function play(_x3){return _ref3.apply(this,arguments)})};var _ref3;const InvalidPhone={play:(_ref4=(0,asyncToGenerator.Z)((function*({canvasElement,step}){const canvas=(0,dist.uh)(canvasElement);yield function leftEmptyPhone(_x9,_x10){return _leftEmptyPhone.apply(this,arguments)}(step,canvas),yield function typeInvalidPhoneNumber(_x11,_x12){return _typeInvalidPhoneNumber.apply(this,arguments)}(step,canvas);const submit=yield getSubmitBtn(canvas);(0,esm.l)(submit.disabled).toBeTruthy()})),function play(_x4){return _ref4.apply(this,arguments)})};var _ref4;const SingIn={render:args=>({props:args})};function _typeWeakPassword(){return(_typeWeakPassword=(0,asyncToGenerator.Z)((function*(step,canvas){yield step("Type Weak Password",(0,asyncToGenerator.Z)((function*(){yield enterPassword(step,canvas,"111");const password=yield getPasswordInput(canvas);yield dist.mV.click(document.body),(0,esm.l)(password.classList.contains("ng-valid")).toBeTruthy()})))}))).apply(this,arguments)}function _leftEmptyPassword(){return(_leftEmptyPassword=(0,asyncToGenerator.Z)((function*(step,canvas){yield step("Type Weak Password",(0,asyncToGenerator.Z)((function*(){yield enterPassword(step,canvas,"");const password=yield getPasswordInput(canvas);yield dist.mV.click(document.body),(0,esm.l)(password.classList.contains("ng-invalid")).toBeTruthy(),(0,esm.l)(canvas.getByText(translated.requredFieldError)).toBeTruthy()})))}))).apply(this,arguments)}function _leftEmptyPhone(){return(_leftEmptyPhone=(0,asyncToGenerator.Z)((function*(step,canvas){yield step("Left Empty Phone",(0,asyncToGenerator.Z)((function*(){yield enterPhone(step,canvas,config.a.Belarus,"");const phoneInput=getPhoneInput(canvas);yield dist.mV.click(document.body),(0,esm.l)(phoneInput.classList.contains("ng-invalid")).toBeTruthy(),(0,esm.l)(canvas.getByText(translated.requredFieldError)).toBeTruthy()})))}))).apply(this,arguments)}function _typeInvalidPhoneNumber(){return(_typeInvalidPhoneNumber=(0,asyncToGenerator.Z)((function*(step,canvas){yield step("Type Invalid Phone",(0,asyncToGenerator.Z)((function*(){yield enterPhone(step,canvas,config.a.Belarus,"+37066111111");const phoneInput=getPhoneInput(canvas);yield dist.mV.click(document.body),(0,esm.l)(phoneInput.classList.contains("ng-invalid")).toBeTruthy(),(0,esm.l)(canvas.getByText(translated.phonePatternError)).toBeTruthy()})))}))).apply(this,arguments)}function _loginWithGoogle(){return(_loginWithGoogle=(0,asyncToGenerator.Z)((function*(step,canvas,args){yield step("Click Google Login",(0,asyncToGenerator.Z)((function*(){const googleLogin=yield canvas.getByText(translated.googleSignIn);yield dist.mV.click(googleLogin),(0,esm.l)(args.googleSignInEmitter).toBeCalled()})))}))).apply(this,arguments)}function _forgetPassword(){return _forgetPassword=(0,asyncToGenerator.Z)((function*(step,canvas,args){yield step("Click Forget Password",(0,asyncToGenerator.Z)((function*(){const forgetPassword=yield canvas.getByText(translated.forgetPassword);yield dist.mV.click(forgetPassword),(0,esm.l)(args.forgetPasswordEmitter).toBeCalled()})))})),_forgetPassword.apply(this,arguments)}function _registry(){return(_registry=(0,asyncToGenerator.Z)((function*(step,canvas,args){yield step("Click Regisrty",(0,asyncToGenerator.Z)((function*(){const registration=yield canvas.getByText(translated.registration);yield dist.mV.click(registration),(0,esm.l)(args.registryEmmiter).toBeCalled()})))}))).apply(this,arguments)}function _fillForm(){return _fillForm=(0,asyncToGenerator.Z)((function*(step,canvas,args){yield enterPassword(step,canvas,"Qwerty1234!"),yield enterPhone(step,canvas,config.a.Belarus,"+375291111111"),yield function remembermeClick(_x25,_x26){return _remembermeClick.apply(this,arguments)}(step,canvas),yield function singIn(_x27,_x28){return _singIn.apply(this,arguments)}(step,canvas),(0,dist.X_)((()=>(0,esm.l)(args.signInEmitter).toHaveBeenCalledWith({password:"Qwerty1234!",phone:"+375291111111",rememberMe:!0})))})),_fillForm.apply(this,arguments)}function _remembermeClick(){return(_remembermeClick=(0,asyncToGenerator.Z)((function*(step,canvas){yield step("Remember me",(0,asyncToGenerator.Z)((function*(){const input=yield canvas.getByLabelText("rememberMe");yield dist.mV.click(input)})))}))).apply(this,arguments)}function _singIn(){return(_singIn=(0,asyncToGenerator.Z)((function*(step,canvas){yield step("Submit",(0,asyncToGenerator.Z)((function*(){const submitButton=yield getSubmitBtn(canvas);yield dist.mV.click(submitButton)})))}))).apply(this,arguments)}function getSubmitBtn(_x29){return _getSubmitBtn.apply(this,arguments)}function _getSubmitBtn(){return(_getSubmitBtn=(0,asyncToGenerator.Z)((function*(canvas){return yield canvas.getByText(translated.signIn)}))).apply(this,arguments)}function enterPhone(_x30,_x31,_x32,_x33){return _enterPhone.apply(this,arguments)}function _enterPhone(){return(_enterPhone=(0,asyncToGenerator.Z)((function*(step,canvas,country,number){yield step("Enter Phone",(0,asyncToGenerator.Z)((function*(){const phoneInput=getPhoneInput(canvas);yield dist.mV.click(phoneInput);const countryButton=yield canvas.getByText(((_,element)=>"LI"===element?.tagName&&element?.classList.contains(country)));yield dist.mV.click(countryButton),number&&(yield dist.mV.type(phoneInput,number,{delay:100})),!number&&(yield dist.mV.click(document.body))})))}))).apply(this,arguments)}function getPhoneInput(canvas){return canvas.getByLabelText(translated.phoneInputLabel,{selector:"input"})}function enterPassword(_x34,_x35,_x36){return _enterPassword.apply(this,arguments)}function _enterPassword(){return(_enterPassword=(0,asyncToGenerator.Z)((function*(step,canvas,password){return yield step("Enter Password",(0,asyncToGenerator.Z)((function*(){const passwordInput=getPasswordInput(canvas);return yield dist.mV.clear(passwordInput),password&&(yield dist.mV.type(passwordInput,password,{delay:100})),!password&&(yield dist.mV.click(passwordInput)),passwordInput})))}))).apply(this,arguments)}function getPasswordInput(canvas){return canvas.getByLabelText(translated.passwordInputLabel,{selector:"input"})}},"./components/src/lib/components/header/header.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"h2 {\n  font-size: 40px;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  margin: 0;\n  padding: 0;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./components/src/lib/components/sub-text/sub-text.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"span {\n  --accent-color: #005341;\n  --accent-weak-color: #DDE8E6;\n  --accent-bg: #DDE8E6;\n  --warn-color: #F43939;\n  --border-color: #9B9B9B;\n  --primary: black;\n  --secondary: white;\n  --padding-y: 12px;\n  --padding-x: 14px;\n  --line-height: 16px;\n  --border: 1.4px solid var(--border-color);\n  --disabled-bg: #F7F6EF;\n  --disabled-color: #3D3D3D;\n  --md-padding: 10px 30px;\n  --sm-padding: 5px 28px ;\n  font-size: 20px;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  color: var(--border-color);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./inputs/src/lib/assets/styles/input-state.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"input:focus {\n  outline: none;\n}\n\ninput:disabled {\n  background-color: var(--border-color);\n  filter: opacity(0.1);\n}\n\n.ng-touched.ng-invalid {\n  border-color: var(--warn-color);\n}\n\n.ng-touched.ng-valid {\n  border-color: var(--accent-color);\n  background: var(--accent-bg);\n}\n\ninput.ng-untouched {\n  border-color: var(--border-color);\n}\n\nwayalay-inputs-validation-messages {\n  color: var(--warn-color);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./inputs/src/lib/components/checkbox/checkbox.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'.container {\n  --size: 24px;\n  --accent-color: #005341;\n  --accent-weak-color: #DDE8E6;\n  --accent-bg: #DDE8E6;\n  --warn-color: #F43939;\n  --border-color: #9B9B9B;\n  --primary: black;\n  --secondary: white;\n  --padding-y: 12px;\n  --padding-x: 14px;\n  --line-height: 16px;\n  --border: 1.4px solid var(--border-color);\n}\n\ninput {\n  margin: 0;\n  height: var(--size);\n  width: var(--size);\n  border: var(--border);\n  border-radius: calc(var(--padding-y) / 2);\n  -webkit-appearance: none;\n          appearance: none;\n  cursor: pointer;\n}\n\ninput:checked ~ .checkmark {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.input-wrapper {\n  position: relative;\n}\n\n.checkmark {\n  display: none;\n  height: var(--size);\n  width: var(--size);\n  border-radius: calc(var(--padding-y) / 2);\n  background-color: var(--accent-color);\n  position: absolute;\n  top: 0;\n  left: 0;\n  cursor: pointer;\n}\n.checkmark::after {\n  content: "";\n  display: inline-block;\n  transform: rotate(45deg);\n  height: var(--size);\n  width: calc(var(--size) / 2);\n  border-bottom: 4px solid white;\n  border-right: 4px solid white;\n  scale: 0.5;\n  margin-bottom: 5px;\n}\n\n.label-wrapper {\n  display: none;\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./inputs/src/lib/components/password-input/password.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".input-wrapper {\n  display: flex;\n  width: 100%;\n  position: relative;\n  --icon-size: 28px;\n  --space: 6px;\n}\n.input-wrapper input {\n  padding-right: calc(var(--icon-size) + 2 * var(--space));\n}\n.input-wrapper button {\n  position: absolute;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-position: center;\n  right: 0;\n  margin-right: var(--space);\n  top: calc(50% - var(--space) * 2);\n  will-change: background-image;\n}\n.input-wrapper input[type=password] + button {\n  background-image: url('eye (regular).5f63b0a7719ad310.svg');\n  height: var(--icon-size);\n  width: var(--icon-size);\n}\n.input-wrapper input[type=text] + button {\n  background-image: url('eye (active).3eaaa3b1817c46fe.svg');\n  height: var(--icon-size);\n  width: var(--icon-size);\n}\n.input-wrapper input[type=password].ng-invalid.ng-touched + button {\n  background-image: url('eye-error (regular).3b2bbb2e28f1e16d.svg');\n  height: var(--icon-size);\n  width: var(--icon-size);\n}\n.input-wrapper input[type=text].ng-invalid.ng-touched + button {\n  background-image: url('eye-error (active).cb4d82a541c92d67.svg');\n  height: var(--icon-size);\n  width: var(--icon-size);\n}\n.input-wrapper input[type=password].ng-valid.ng-touched + button {\n  background-image: url('eye-valid (regular).fde541bb79144e01.svg');\n  height: var(--icon-size);\n  width: var(--icon-size);\n}\n.input-wrapper input[type=text].ng-valid.ng-touched + button {\n  background-image: url('eye-valid (active).139b2d0cb2798184.svg');\n  height: var(--icon-size);\n  width: var(--icon-size);\n}\n\ninput {\n  width: 100%;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./widgets/src/lib/sign-in/sign-in.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".widget-container {\n  display: flex;\n  flex-direction: column;\n  max-width: 400px;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.widget-header {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 36px;\n}\n\n.controls {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.controls-center {\n  justify-content: center;\n}\n\n.controls-between {\n  justify-content: space-between;\n}\n\n.controls-single *:first-child {\n  margin-right: 14px;\n}\n.controls-single-space *:first-child {\n  margin-right: 6px;\n}\n\n@media (max-width: 420px) {\n  .controls-single-space {\n    flex-direction: column;\n  }\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 24px;\n}\n.form .form-content {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.form .submit {\n  margin-top: 24px;\n  margin-bottom: 10px;\n}\n\n.submit {\n  width: 100%;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"?4f7e":()=>{}}]);