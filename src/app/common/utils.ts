export function getQueryParams(filters, sorts, pagination): Object {

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

export function getSorts(): Array<any> {

  const sorts = [];

  return sorts;
}

export function getPagination(page: number): Object {

  return {
    page,
    size: 20
  };
}
