import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import SearchBar from './SearchBar';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';
import { useDispatch } from 'react-redux';
import { fetchSales } from '../redux/thunk';
import { debounce } from '@/lib/utils';

function SalesTable({ date }) {
  const [page, setPage] = useState(1);
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  const sales = useSelector((state) => state.sales.data);
  const total = useSelector((state) => state.sales.total);

  useEffect(() => {
    dispatch(
      fetchSales({ page, product, startDate: date?.from, endDate: date?.to })
    );
  }, [page, product, date?.from && date.from, date?.to && date?.to]);

  const handleSearch = debounce((e) => setProduct(e.target.value), 400);

  return (
    <>
      <SearchBar onChange={handleSearch} />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Produk</TableHead>
            <TableHead>Tanggal</TableHead>
            <TableHead>Jumlah Penjualan</TableHead>
            <TableHead>Pendapatan</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sales.map((value) => (
            <TableRow key={value.id}>
              <TableCell className="min-w-[120px]">{value.product}</TableCell>
              <TableCell className="min-w-[120px]">{value.date}</TableCell>
              <TableCell className="min-w-[120px]">{value.sales}</TableCell>
              <TableCell className="min-w-[120px]">{value.revenue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="pt-4">
        <Pagination totalData={total} onPageChange={(page) => setPage(page)} />
      </div>
    </>
  );
}

export default SalesTable;
