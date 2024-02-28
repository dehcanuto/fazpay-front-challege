import { moneyFormatter } from "./formatters";

export const statusColor = (status: string) => {
    switch (status) {
        case 'in_stock':
            return {
                color: '#50d06e',
                name: 'Em estoque'
            }
            break;
        case 'out_stock':
            return {
                color: '#fa5c7c',
                name: 'Sem estoque'
            }
            break;
        case 'middle_stock':
            return {
                color: '#ff9800',
                name: 'Poucas unidades'
            }
            break;
        default:
            return {
                color: '#fa5c7c',
                name: 'Verificar estoque'
            }
            break;
    }
}

export const colorConfig = {
    error: 'bg-error',
    success: 'bg-success'
}

export const columnType = (type: string, value: string) => {
    switch (type) {
        case 'price':
            return (
                <span className="text-sm leading-5 text-gray-900">
                    {moneyFormatter(value)}
                </span>
            )
            break;
        case 'status':
            return (
                <span
                    style={{ backgroundColor: statusColor(value)?.color}}
                    className="inline-flex py-2 px-3 text-xs font-semibold leading-5 text-white rounded-full">
                    {statusColor(value)?.name}                            
                </span>
            )
            break;    
        default:
            return (
                <span className="text-sm leading-5 text-gray-900">
                    {value}
                </span>
            )
            break;
    }
}