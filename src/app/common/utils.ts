export function getQueryParams(filters, sorts, pagination): string {

  const params = {
    filters,
    sorts,
    pagination
  };

  return `?args=${JSON.stringify(params)}`;
}

export function getFilters(data: Object): Array<any> {

  const filters = [];

  Object.keys(data).forEach((key) => {

    if (data[key] !== null && data[key] !== '') {

      if (Array.isArray(data[key])) {  // 日期时间范围字段

        data[key].forEach((item, index) => {
          filters.push({
            field: key,
            value: data[key][index],
            operator: index === 0 ? 'GTE' : 'LTE'
          });
        });
      } else {

        filters.push({
          field: key,
          value: data[key]
        });
      }
    }
  });

  return filters;
}

export function getSorts(sort: any): Array<any> {

  const sorts = [];

  if (sort.value === 'descend') {
    sorts.push({
      field: sort.key,
      desc: true
    });
  } else if (sort.value === 'ascend') {
    sorts.push({
      field: sort.key
    });
  }

  return sorts;
}

export function getPagination(page: number, size: number): Object {

  return {
    page,
    size
  };
}
