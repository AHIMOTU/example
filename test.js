let utils = {
  stringifyJson(str) {
    return JSON.stringify(str, (k, v) => {
      if (v instanceof RegExp) return v.toString()
      if (typeof v === 'function') return v.toString()
      return v
    })
  },
  parseJson(jsonStr) {
    return JSON.parse(jsonStr, (k, v) => {
      console.log(v.indexOf && v.indexOf('function') > -1)
      try {
        // eslint-disable-next-line no-eval
        // if (eval(v) instanceof RegExp) return eval(v)
        if (v.indexOf && v.indexOf('function') > -1) return eval("(function () { return " + v + " })()")
        // eslint-disable-next-line no-eval
        if (typeof eval(v) === 'function') return eval(v)
      } catch (e) {
        // nothing
      }
      return v
    })
  },
}


// let obj = '{"inject": true, "on":{"select":"(inject, selected) => console.log(selected)"}}'
// let obj = '{"on":{"select":"function () { console.log(this) }"}}'
// let obj = `{"inject":true,"on":{"change":"(inject) =>{const settlementFields = inject.rule.filter(item => item.isSettlement === '1').map(item => item.field);const settlementAmount = settlementFields.reduce((total, cur) => total + inject.$f.getValue(cur), 0);inject.$f.setValue('settlementAmount', settlementAmount);}"}}`
// let obj = `{"inject":true,"on":{"change":"(inject) =>{const reducedFields = inject.rule.filter(item => item.isReduced === '1').map(item => item.field);const reducedAmount = reducedFields.reduce((total, cur) => total + inject.$f.getValue(cur), 0);inject.$f.setValue('reducedAmount', reducedAmount);}"}}`
// let obj = `{"setValueCb": "function () { const { orderTime, customizeCode, houseName, houseBatch, accountType } = formGroup.订单信息.fApi.formData(); const { name72, name75 } = formGroup.物流信息.fApi.formData(); const { name89, name84 } = formGroup.工程物流信息.fApi.formData(); const { financialRemark } = formGroup.财务信息.fApi.formData(); const virtualOutStock1 = customizeCode.includes('样') || houseName.includes('关系') || houseBatch.includes('外购') ? '发货出仓' : ''; const virtualOutStock2 = orderTime && +orderTime.split('-')[0] < 2019 || customizeCode.includes('样') || financialRemark ? '出' : ''; const virtualOutStock = accountType === this.$c.debitTypeV.预扣 ? virtualOutStock1 : virtualOutStock2; const financialRemark1 = virtualOutStock ? '发货出仓' : ''; const financialRemark2 = name89 || name84 || name72 || name75 ? '出' : ''; const financialRemark = accountType === this.$c.debitTypeV.预扣 ? financialRemark1 : financialRemark2;formGroup.财务信息.fApi.setValue({ virtualOutStock, openingBalance: orderTime, financialRemark }); }"}`
let obj = `{"setValueCb": "function ($f, formGroup){ const { orderTime, customizeCode, houseName, houseBatch, accountType } = formGroup.订单信息.fApi.formData(); const { name72, name75 } = formGroup.物流信息.fApi.formData(); const { name89, name84 } = formGroup.工程物流信息.fApi.formData(); const { financialRemark } = formGroup.财务信息.fApi.formData(); const virtualOutStock1 = customizeCode.includes('样') || houseName.includes('关系') || houseBatch.includes('外购') ? '发货出仓' : ''; const virtualOutStock2 = orderTime && +orderTime.split('-')[0] < 2019 || customizeCode.includes('样') || financialRemark ? '出' : ''; const virtualOutStock = accountType === this.$c.debitTypeV.预扣 ? virtualOutStock1 : virtualOutStock2; const financialRemark1 = virtualOutStock ? '发货出仓' : ''; const financialRemark2 = name89 || name84 || name72 || name75 ? '出' : ''; const financialRemark = accountType === this.$c.debitTypeV.预扣 ? financialRemark1 : financialRemark2;formGroup.财务信息.fApi.setValue({ virtualOutStock, openingBalance: orderTime, financialRemark }); }"}`
console.log(utils.parseJson(obj))
// console.log(JSON.parse(obj))

const change = (inject) => {
  // const settlementFields = inject.rule.filter(item => item.isSettlement === '1').map(item => item.field);
  // const settlementAmount = settlementFields.reduce((total, cur) => total + inject.$f.getValue(cur), 0);
  // inject.$f.setValue('settlementAmount', settlementAmount);
  const { name89, name84, name72, name75 } = this.formGroup.物流信息.fApi.formData()
  this.formGroup.财务信息.fApi.setValue('financialRemark', name89 || name84 || name72 || name75 ? '出' : '')
  this.formGroup.财务信息.fApi.setValue('name94', name84 || name72 ? '橱柜出仓' : '')

  const {customizeCode,houseName,houseBatch } = this.formGroup.订单信息.fApi.formData();
  const virtualOutStock = customizeCode?.includes('样') || houseName?.includes('关系') || houseBatch?.includes('外购')  ? '出' : undefined;
  this.formGroup.财务信息.fApi.setValue('virtualOutStock', virtualOutStock);
  virtualOutStock?this.formGroup.财务信息.fApi.setValue({financialRemark:'发货出仓'}) : this.formGroup.财务信息.fApi.setValue({financialRemark:''});

  const { orderTime, customizeCode, houseName, houseBatch, accountType } = this.formGroup.订单信息.fApi.formData();
  const { financialRemark } = this.formGroup.财务信息.fApi.formData();
  const virtualOutStock2 = orderTime && +orderTime.split('-')[0] < 2019 || customizeCode?.includes('样') || financialRemark ? '出' : undefined;
  const virtualOutStock1 = customizeCode?.includes('样') || houseName?.includes('关系') || houseBatch?.includes('外购')  ? '出' : undefined;
  const financialRemark1 = virtualOutStock1 ? '发货出仓' : ''
  const financialRemark2 = financialRemark
  const virtualOutStock = accountType === this.$c.debitTypeV.预扣 ? virtualOutStock1 : virtualOutStock2
  const _financialRemark = accountType === this.$c.debitTypeV.预扣 ? financialRemark1 : financialRemark2
  this.formGroup.财务信息.fApi.setValue({ virtualOutStock, financialRemark: _financialRemark });

  const { customizeCode, houseName, houseBatch, accountType } = this.formGroup.订单信息.fApi.formData();
  const virtualOutStock1 = customizeCode?.includes('样') || houseName?.includes('关系') || houseBatch?.includes('外购')  ? '出' : undefined;
  const financialRemark1 = virtualOutStock1 ? '发货出仓' : '';
  accountType === this.$c.debitTypeV.预扣 && this.formGroup.财务信息.fApi.setValue({ virtualOutStock: virtualOutStock1, financialRemark: financialRemark1 });

  const { orderTime, customizeCode, accountType } = this.formGroup.订单信息.fApi.formData(); const { financialRemark } = this.formGroup.财务信息.fApi.formData(); const virtualOutStock2 = orderTime && +orderTime.split('-')[0] < 2019 || customizeCode?.includes('样') || financialRemark ? '出' : undefined; accountType === this.$c.debitTypeV.实扣 && this.formGroup.财务信息.fApi.setValue({ virtualOutStock: virtualOutStock2 });
}

// const select = (inject, selected) => {
//   const { id: dealerId, engineeringDeptName: department, engineeringDeptLineName: line } = selected
//   inject.$f.setValue({ dealerId, department, line })
//   inject.$f.updateRule('contractCode', { props: { disabled: false, otherSearch: { dealerId } } })
//   const { dealerName, category, contractCode, custName } = inject.$f.formData()
//   const customerName = contractCode ? custName : (dealerName + this.$c.dealerTypeK[category] || '')
//   const virtualOutStock = val && +val.split('-')[0] < 2019 ? '出' : ''
//   // {"inject": true, "on": {"change": "function (inject) {}"}}
//   const { name12, name13 } = inject.$f.formData()
//   const name14 = name12 * name13 || 0
//   inject.$f.setValue('name14', name14)
//   const { orderTime, customizeCode } = this.formGroup.订单信息.fApi.formData();
//   const { financialRemark } = this.formGroup.财务信息.fApi.formData();
//   const virtualOutStock = orderTime && +orderTime.split('-')[0] < 2019 || customizeCode?.includes('样') || financialRemark ? '出' : undefined;
//   this.formGroup.财务信息.fApi.setValue('virtualOutStock');
// }

// const clear = function (inject) {
//   const { dealerName, category } = inject.$f.formData();
//   const customerName = (dealerName || '') + (this.$c.dealerTypeK[category] || '');
//   inject.$f.setValue({ contractId: null, customerName, purchaseCompany: null });
// }

const renderCb = function (row, fields, cellValue, originRow) {
  const settlementFields = fields.filter(item => item.isSettlement === '1').map(item => item.propertyCode);
  if (settlementFields.every(item => row[item] === null || row[item] === '')) return null;
  const settlementAmount = settlementFields.reduce((total, cur) => total + Number(row[cur]), 0);
  return settlementAmount;

  const reducedFields = fields.filter(item => item.isReduced === '1').map(item => item.propertyCode);
  const reducedAmount = reducedFields.reduce((total, cur) => total + Number(row[cur]), 0);
  return reducedAmount;

  const { name12, name13 } = row;
  const settlementAmount = name12 * name13 || 0;
  return settlementAmount;

  const { name72, name75, name89, name84 } = row;
  const financialRemark = name89 || name84 || name72 || name75 ? '出' : '';
  return financialRemark;

  const { customizeCode, houseName, houseBatch } = row;
  const virtualOutStock1 = customizeCode?.includes('样') || houseName?.includes('关系') || houseBatch?.includes('外购') ? '发货出仓' : '';
  const financialRemark1 = virtualOutStock1 ? '发货出仓' : '';
  return financialRemark;

  const { orderTime, customizeCode, name72, name75, name89, name84 } = row;
  const financialRemark2 = name89 || name84 || name72 || name75 ? '出' : '';
  const virtualOutStock = orderTime && +orderTime.split('-')[0] < 2019 || customizeCode?.includes('样') || financialRemark2 ? '出' : '';
  return virtualOutStock;

  const { customizeCode, houseName, houseBatch } = row;
  const virtualOutStock = customizeCode?.includes('样') || houseName?.includes('关系') || houseBatch?.includes('外购') ? '发货出仓' : '';
  return virtualOutStock;

  const { name84, name72 } = row;
  const name94 = name84 || name72 ? '橱柜出仓' : '';
  return name94;

  const { name89, name75 } = row;
  const name95 = name89 || name75 ? '橱柜出仓' : '';
  return name95;
}

const setValueCb = function ($f, formGroup) {
  const { dealerId } = $f.formData();
  $f.updateRule('contractCode', { props: { disabled: !dealerId, otherSearch: { dealerId } } });

  const settlementFields = $f.rule.filter(item => item.isSettlement === '1').map(item => item.field);
  const settlementAmount = settlementFields.reduce((total, cur) => total + $f.getValue(cur), 0);
  $f.setValue('settlementAmount', settlementAmount);

  const { name12, name13 } = $f.formData();
  const settlementAmount = name12 * name13 || 0;
  $f.setValue('settlementAmount', settlementAmount);

  const reducedFields = $f.rule.filter(item => item.isReduced === '1').map(item => item.field);
  const reducedAmount = reducedFields.reduce((total, cur) => total + $f.getValue(cur), 0);
  $f.setValue('reducedAmount', reducedAmount);

  const { orderTime, customizeCode, accountType } = formGroup.订单信息.fApi.formData(); const { financialRemark } = formGroup.财务信息.fApi.formData();
  const virtualOutStock = orderTime && +orderTime.split('-')[0] < 2019 || customizeCode?.includes('样') || financialRemark ? '出' : undefined;
  accountType === this.$c.debitTypeV.实扣 && formGroup.财务信息.fApi.setValue({ virtualOutStock, openingBalance: orderTime, financialRemark });

  const { orderTime, customizeCode, houseName, houseBatch, accountType } = formGroup.订单信息.fApi.formData();
  const { name72, name75 } = formGroup.物流信息?.fApi.formData() || {};
  const { name89, name84 } = formGroup.工程物流信息?.fApi.formData() || {};
  const financialRemark2 = name89 || name84 || name72 || name75 ? '出' : '';
  const virtualOutStock2 = orderTime && +orderTime.split('-')[0] < 2019 || customizeCode?.includes('样') || financialRemark2 ? '出' : '';
  const virtualOutStock1 = customizeCode?.includes('样') || houseName?.includes('关系') || houseBatch?.includes('外购') ? '发货出仓' : '';
  const financialRemark1 = virtualOutStock1 ? '发货出仓' : '';
  const virtualOutStock = accountType === this.$c.debitTypeV.预扣 ? virtualOutStock1 : virtualOutStock2;
  const financialRemark = accountType === this.$c.debitTypeV.预扣 ? financialRemark1 : financialRemark2;
  const name94 = name84 || name72 ? '橱柜出仓' : '';
  const name95 = name75 || name89 ? '台面出仓' : '';
  formGroup.财务信息.fApi.setValue({ virtualOutStock, openingBalance: orderTime, financialRemark, name94, name95 });

  const { orderTime, customizeCode, houseName, houseBatch, accountType } = formGroup.订单信息.fApi.formData();
  const { name69 } = formGroup.工程物流信息?.fApi.formData() || {};
  const financialRemark2 = name69 ? '出' : '';
  const virtualOutStock2 = orderTime && +orderTime.split('-')[0] < 2019 || customizeCode?.includes('样') || financialRemark2 ? '出' : '';
  const virtualOutStock1 = customizeCode?.includes('样') || houseName?.includes('关系') || houseBatch?.includes('外购') ? '发货出仓' : '';
  const financialRemark1 = virtualOutStock1 ? '发货出仓' : '';
  const virtualOutStock = accountType === this.$c.debitTypeV.预扣 ? virtualOutStock1 : virtualOutStock2;
  const financialRemark = accountType === this.$c.debitTypeV.预扣 ? financialRemark1 : financialRemark2;
  formGroup.财务信息.fApi.setValue({ virtualOutStock, openingBalance: orderTime, financialRemark });

  const { orderTime, customizeCode, houseName, houseBatch, accountType } = formGroup.订单信息.fApi.formData();
  const { name48 } = formGroup.工程物流信息?.fApi.formData() || {};
  const financialRemark2 = name48 ? '出' : '';
  const virtualOutStock2 = orderTime && +orderTime.split('-')[0] < 2019 || customizeCode?.includes('样') || financialRemark2 ? '出' : '';
  const virtualOutStock1 = customizeCode?.includes('样') || houseName?.includes('关系') || houseBatch?.includes('外购') ? '发货出仓' : '';
  const financialRemark1 = virtualOutStock1 ? '发货出仓' : '';
  const virtualOutStock = accountType === this.$c.debitTypeV.预扣 ? virtualOutStock1 : virtualOutStock2;
  const financialRemark = accountType === this.$c.debitTypeV.预扣 ? financialRemark1 : financialRemark2;
  formGroup.财务信息.fApi.setValue({ virtualOutStock, openingBalance: orderTime, financialRemark });

  const { orderTime, customizeCode, houseName, houseBatch, accountType } = formGroup.订单信息.fApi.formData();
  const { name27 } = this.formGroup.财务信息.fApi.formData();
  const financialRemark2 = name27 ? '出' : '';
  const virtualOutStock2 = orderTime && +orderTime.split('-')[0] < 2019 || customizeCode?.includes('样') || financialRemark2 ? '出' : '';
  const virtualOutStock1 = customizeCode?.includes('样') || houseName?.includes('关系') || houseBatch?.includes('外购') ? '发货出仓' : '';
  const financialRemark1 = virtualOutStock1 ? '发货出仓' : '';
  const virtualOutStock = accountType === this.$c.debitTypeV.预扣 ? virtualOutStock1 : virtualOutStock2;
  const financialRemark = accountType === this.$c.debitTypeV.预扣 ? financialRemark1 : financialRemark2;
  formGroup.财务信息.fApi.setValue({ virtualOutStock, openingBalance: orderTime, financialRemark });

  const { name72, name75 } = this.formGroup.物流信息.fApi.formData();
  const { name89, name84 } = this.formGroup.工程物流信息.fApi.formData();
  this.formGroup.财务信息.fApi.setValue('financialRemark', name89 || name84 || name72 || name75 ? '出' : '');
  this.formGroup.财务信息.fApi.setValue({ name95: name89 || name75 ? '台面出仓' : '', virtualOutStock: name89 || name75 ? '出' : '' })
  
}

// const ToUrl = '/borrow-detail/1?sysId=GCZK-PROD&modelId=borrowing&templateFormId=borrowing_apply&formInstanceId=7f6b7d0967e072ea588c2c53780bed57&processId=17549a374a8f3dbdaf6ce4d411e9739b&flowTemplateId=17516180985c7946e99b9cd4ee8aa425'
// // const ToUrl = '/acproject/borrow-detail/1?sysId=GCZK-PROD&modelId=borrowing&templateFormId=borrowing_apply&formInstanceId=7b300dcd16d2684da4170508618208b6&processId=1754e46701b69c87786d4f348ab829b6&flowTemplateId=17516180985c7946e99b9cd4ee8aa425'

// console.log(ToUrl.replace(/(\/acproject)?(\/.*)1\?.*?(formInstanceId=.*?)(&.*)*$/, '$21?$3'))

// const options = {
//   global: {
//     '*': {
//       col: { span: 8 }
//     }
//   },
//   form: {
//     labelWidth: '170px',
//     size: 'medium'
//   },
//   submitBtn: false,

//   mounted: function ($f) { const { dealerId } = $f.formData(); $f.updateRule('contractCode', { props: { disabled: !dealerId, otherSearch: { dealerId } } }); }
// }


