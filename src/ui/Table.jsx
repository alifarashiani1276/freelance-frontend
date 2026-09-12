function Table({ children }) {
  return (
    <div className="table-card">
      <div className="table-scroll">
        <table className="data-table">{children}</table>
      </div>
    </div>
  );
}

function TableHeader({ children }) {
  return ( 
    <thead>
      <tr>{children}</tr>
    </thead>
  );
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }) {
  return <tr>{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;

export default Table;
