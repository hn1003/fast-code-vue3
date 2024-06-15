import type { TObjToComputed, TtoComputed } from "../../types/util";
import type { IFormModule, TBtn, TForm, THeader, TLayout } from "../../types/components/form-module/index";
import type { TOption, TOptions } from "../../types/components/form-module/options";
import { unref } from "vue";

class FormModule implements IFormModule {
  options?: TtoComputed<TOptions> = [];
  layout?: TtoComputed<TLayout> = {};
  form?: TtoComputed<TForm> = {};
  btn?: TtoComputed<TBtn> = {};
  header?: TtoComputed<THeader> = {};
  submit?: (...arg: any[]) => any
  reset?: (...arg: any[]) => any
  constructor(options: IFormModule) {
    this.options = options.options
    this.layout = options.layout
    this.form = options.form
    this.btn = options.btn
    this.header = options.header    
    this.submit = options.submit
    this.reset = options.reset
  }
  getOption(prop: string):TObjToComputed<TOption> | undefined {
    return unref(this.options)?.find(item => unref(item)?.prop === prop)
  }
}

export default FormModule