import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

function DateFilter({ className, onChange }) {
  const [date, setDate] = useState({
    from: '',
    to: '',
  });

  useEffect(() => {
    onChange(date);
  }, [date]);

  return (
    <div className="flex items-center">
      <div className={cn('grid gap-2 w-max ml-auto pt-8 pb-4', className)}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={'outline'}
              className={cn(
                'justify-end text-left font-normal',
                !date && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, 'LLL dd, y')} -{' '}
                    {format(date.to, 'LLL dd, y')}
                  </>
                ) : (
                  format(date.from, 'LLL dd, y')
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
              o
            />
          </PopoverContent>
        </Popover>
      </div>
      <Button
        variant="outline"
        className="h-9 mt-3 ml-2"
        onClick={() =>
          setDate({
            from: '',
            to: '',
          })
        }
      >
        <Trash2 className="mr-2 h-4 w-4" />
        Clear
      </Button>
    </div>
  );
}

export default DateFilter;
