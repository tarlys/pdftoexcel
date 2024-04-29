import { downloadExcel } from 'react-export-table-to-excel'

function excel(data) {
  const pensionFund = 0.075
  const vat = 0.2
  const withoutTaxes = 1 // price of services without tax

  const vatAndPensionFund = withoutTaxes + pensionFund + vat

  const header = ['Номер телефона', 'Сервіс', 'Сума з ПДВ та ПФ', 'Сума без ПДВ та ПФ', 'ПФ', 'ПДВ']

  const body = []

  for (const item of data) {
    for (const service of item.services) {
      let cost = service.cost.toString()

      let stringCost = cost.indexOf('.') !== -1 ? cost.replace(/\./, ',') : cost

      let withoutPDVandPF = `${Math.round((service.cost / vatAndPensionFund) * 100) / 100}`.replace(/\./, ',')
      let costPF = `${Math.round((service.cost / vatAndPensionFund) * pensionFund * 100) / 100}`.replace(/\./, ',')
      let costPDV = `${Math.round((service.cost / vatAndPensionFund) * vat * 100) / 100}`.replace(/\./, ',')

      body.push([`${item.phoneNumber}`, `${service.name}`, `${stringCost}`, `${withoutPDVandPF}`, 0, `${costPDV}`])
      body.push([`${item.phoneNumber}`, `${service.name},ПФ`, `${stringCost}`, 0, `${costPF}`, 0])
    }
  }

  downloadExcel({
    fileName: 'downloadExcel bill',
    sheet: 'bill',
    tablePayload: {
      header,
      body: body,
    },
  })
}
export default excel
