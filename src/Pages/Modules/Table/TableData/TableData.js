import React, { useMemo } from 'react';
import {
  MRT_GlobalFilterTextInput,
  MRT_ToggleFiltersButton,
  MantineReactTable,
  useMantineReactTable,
} from 'mantine-react-table';
import { Box, Button, Flex, Menu, Text, Title } from '@mantine/core';
import { IconUserCircle, IconSend } from '@tabler/icons-react';
import { useReferences } from '../../../../hooks/API/useReferences';
import { useNavigate } from 'react-router-dom';

export const TableData = () => {

  const navigate = useNavigate();
  const { payload, loading } = useReferences();
  const data = useMemo(() => (payload ? payload.data : []), [payload]); // Upewnij się, że dane są dostępne i pamiętaj o memoizacji

  const columns = useMemo(
    () => [
      {
        id: 'employee',
        header: 'Referencje',
        columns: [
          {
            accessorFn: (row) => row.nazwa,
            id: 'name',
            header: 'Nazwa',
            size: 250,
            filterVariant: 'autocomplete',
            Cell: ({ renderedCellValue }) => (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span>{renderedCellValue}</span>
              </Box>
            ),
          },
          {
            accessorFn: (row) => row.projekt,
            id: 'project-name',
            header: 'Nazwa Projektu',
            size: 250,
            filterVariant: 'autocomplete',
            Cell: ({ renderedCellValue }) => (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span>{renderedCellValue}</span>
              </Box>
            ),
          },
          {
            accessorFn: (row) => row.firma,
            id: 'zamawiajacy',
            header: 'Zamawiający',
            size: 250,
            filterVariant: 'autocomplete',
            Cell: ({ renderedCellValue }) => (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span>{renderedCellValue}</span>
              </Box>
            ),
          },
          {
            accessorFn: (row) => row.tematyka,
            id: 'tematyka',
            header: 'Tematyka',
            size: 250,
            filterVariant: 'autocomplete',
            Cell: ({ renderedCellValue }) => (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span>{renderedCellValue}</span>
              </Box>
            ),
          },
          {
            accessorFn: (row) => row.beneficjent,
            id: 'beneficiary',
            header: 'Beneficjenci',
            size: 250,
            filterVariant: 'multi-select',
            Cell: ({ renderedCellValue }) => (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span>{renderedCellValue}</span>
              </Box>
            ),
          },
        ],
      },
      {
        id: 'id',
        header: 'Data',
        columns: [
          {
            accessorFn: (row) => new Date(row.od),
            id: 'startDate',
            header: 'Data od',
            filterVariant: 'date-range',
            sortingFn: 'datetime',
            enableColumnFilterModes: false,
            Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(),
            Header: ({ column }) => <em>{column.columnDef.header}</em>,
          },
          {
            accessorFn: (row) => new Date(row.do),
            id: 'endDate',
            header: 'Data do',
            filterVariant: 'date-range',
            sortingFn: 'datetime',
            enableColumnFilterModes: false,
            Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(),
            Header: ({ column }) => <em>{column.columnDef.header}</em>,
          },
        ],
      },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data,
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableFacetedValues: true,
    enableGrouping: true,
    enablePinning: true,
    enableRowActions: false,
    enableRowSelection: true,
    initialState: { showColumnFilters: true, showGlobalFilter: true },
    paginationDisplayMode: 'pages',
    positionToolbarAlertBanner: 'bottom',
    mantinePaginationProps: {
      radius: 'xl',
      size: 'lg',
    },
    mantineSearchTextInputProps: {
      placeholder: 'Wyszukaj',
    },
    renderDetailPanel: ({ row }) => (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '16px',
          padding: '16px',
        }}
      >
        <img
          alt="avatar"
          height={200}
          src={row.original.avatar}
          style={{ borderRadius: '50%' }}
        />
        <Box sx={{ textAlign: 'center' }}>
          <Title>Opis:</Title>
          <Text>{row.original.projekt}</Text>
          <Text>{row.original.tematyka}</Text>
        </Box>
      </Box>
    ),
    renderRowActionMenuItems: () => (
      <>
        <Menu.Item icon={<IconUserCircle />}>View Profile</Menu.Item>
        <Menu.Item icon={<IconSend />}>Send Email</Menu.Item>
      </>
    ),
    renderTopToolbar: ({ table }) => {
      const handleDeactivate = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert('deactivating ' + row.getValue('name'));
        });
      };

      const handleActivate = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert('activating ' + row.getValue('name'));
        });
      };

      const handleContact = () => {
        navigate('/user/referencje/AddReferencje');
      };

      return (
        <Flex p="md" justify="space-between">
          <Flex gap="xs">
            <MRT_GlobalFilterTextInput table={table} />
            <MRT_ToggleFiltersButton table={table} />
          </Flex>
          <Flex sx={{ gap: '8px' }}>
            <Button
              color="red"
              disabled={!table.getIsSomeRowsSelected()}
              onClick={handleDeactivate}
              variant="filled"
            >
              Pobierz
            </Button>
            <Button
              color="green"
              disabled={!table.getIsSomeRowsSelected()}
              onClick={handleActivate}
              variant="filled"
            >
              Do Excel
            </Button>
            <Button
              color="blue"
              onClick={handleContact}
              variant="filled"
            >
              Dodaj
            </Button>
          </Flex>
        </Flex>
      );
    },
  });

  if (loading) return <h1>Loading...</h1>;

  return <MantineReactTable table={table} />;
};