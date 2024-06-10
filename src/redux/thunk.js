import { http } from '@/lib/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { format } from 'date-fns';

export const fetchSales = createAsyncThunk(
  'sales/fetchSales',
  async ({ page, product, startDate, endDate }) => {
    const res = await http.get(
      `/sales?_page=${page}&_limit=10${product ? '&product=' + product : ''}${
        startDate ? '&date_gte=' + format(startDate, 'yyyy-MM-dd') : ''
      }${endDate ? '&date_lte=' + format(endDate, 'yyyy-MM-dd') : ''}`
    );
    const data = res.data;
    console.log();
    return {
      data,
      total: res.headers['x-total-count'],
    };
  }
);
