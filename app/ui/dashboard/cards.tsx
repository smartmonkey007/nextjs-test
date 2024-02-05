import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';
import clsx from 'clsx';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const { numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices } = await fetchCardData();

  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];
  const intValue = typeof value === 'string' ? parseInt(value) : value;
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className={clsx('flex p-4', {
        'bg-green-500 text-white': type === 'collected',
        'bg-yellow-500 text-white': type === 'pending',
        'bg-gray-500 text-white': type === 'invoices' || type === 'customers',
      })}>
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={
          clsx(
            {
              'bg-green-500': intValue > 0,
              'bg-yellow-500': intValue < 0,
              'bg-slate-300': intValue !== value
            }, `${lusitana.className} truncate rounded-b-xl px-4 py-8 text-center text-2xl`)
        }
      >
        {value}
      </p>
    </div>
  );
}
