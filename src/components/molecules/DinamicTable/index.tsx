import { columnType } from "@/misc";
import { DinamicTablePropsType } from "./types";
import Link from "next/link";

const DinamicTable = ({ headers, rows, path, loading = false }: DinamicTablePropsType) => {
    return (
        <table className="min-w-full table-auto">
            <thead>
                <tr>
                    {headers.map((item, key) => (
                        <th key={key} className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            {item}
                        </th>
                    ))}
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
                {loading ? 
                    [1, 2, 3, 4, 5].map((_, key) => (
                        <tr key={key}>
                            {headers.map((_, key) => (
                                <td key={key}>
                                    <span className="animate-pulse flex w-2/3 h-4 mx-auto my-3 bg-gray-300 rounded" />
                                </td>
                            ))}
                            <td key={key}>
                                <span className="animate-pulse flex w-2/3 h-4 mx-auto my-3 bg-indigo-300 rounded" />
                            </td>
                        </tr>
                    ))
                    : (
                    rows.map((item, key) => (
                        <tr key={key}>
                            {Object.keys(item).map((child, key) => (
                                <td key={key} className="px-6 py-4 text-gray-600 whitespace-no-wrap border-b border-gray-200">
                                    {columnType(child, item[child])}
                                </td>
                            ))}
                            <td className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                                <Link href={{ pathname: path + item.id }} className="text-indigo-600 hover:text-indigo-900">
                                    Editar
                                </Link>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    )
}

export default DinamicTable;