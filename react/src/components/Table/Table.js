import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import styles from "assets/jss/material-dashboard-pro-react/components/tableStyle";

const useStyles = makeStyles(styles);

export default function CustomTable(props) {

  const [orderBy, setOrderBy] = React.useState(0);
  const [asc, setAsc] = React.useState(true);

  const classes = useStyles();
  const {
    tableHead,
    tableData,
    tableHeaderColor,
    hover,
    colorsColls,
    coloredColls,
    customCellClasses,
    customClassesForCells,
    striped,
    tableShopping,
    customHeadCellClasses,
    customHeadClassesForCells,
    className,
    height,
    colgroup,
  } = props;

  const useTableData = tableData.sort((a,b) => {
    if(asc) {
      return a[orderBy] - b[orderBy]
    } else {
      return b[orderBy] - a[orderBy]
    }

  })

  return (
    <div className={classes.tableResponsive}>
      <div className={classes.tableHead}>
        <Table className={`${classes.table} ${className}`}>
          {colgroup !== undefined ? (
            <colgroup>
              {colgroup.map((prop, key) => {

                return (
                  <col key={key} width={`${prop}%`}/>
                )
              })}
            </colgroup>
          ) : null}
          {tableHead !== undefined ? (
            <TableHead className={classes[tableHeaderColor]}>
              <TableRow className={classes.tableRow + " " + classes.tableRowHead}>
                {tableHead.map((prop, key) => {
                  const tableCellClasses =
                    classes.tableHeadCell +
                    " " +
                    classes.tableCell +
                    " " +
                    cx({
                      [customHeadCellClasses[
                        customHeadClassesForCells.indexOf(key)
                      ]]: customHeadClassesForCells.indexOf(key) !== -1,
                      [classes.tableShoppingHead]: tableShopping,
                      [classes.tableHeadFontSize]: !tableShopping
                    });
                  return (
                    <TableCell className={tableCellClasses} key={key} onClick={() => {key===orderBy? setAsc(!asc) : setOrderBy(key)}}>
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
          ) : null}
        </Table>
      </div>
      <div style={{height:height, overflowY: 'scroll'}}>
        <Table className={`${classes.table} ${className}`}>
          {colgroup !== undefined ? (
            <colgroup>
              {colgroup.map((prop, key) => {

                return (
                  <col key={key} width={`${prop}%`}/>
                )
              })}
            </colgroup>
          ) : null}
          <TableBody>
            {useTableData.map((prop, key) => {
              var rowColor = "";
              var rowColored = false;
              if (prop.color !== undefined) {
                rowColor = prop.color;
                rowColored = true;
                prop = prop.data;
              }
              const tableRowClasses = cx({
                [classes.tableRowBody]: true,
                [classes.tableRowHover]: hover,
                [classes[rowColor + "Row"]]: rowColored,
                [classes.tableStripedRow]: striped && key % 2 === 0
              });
              if (prop.total) {
                return (
                  <TableRow key={key} hover={hover} className={tableRowClasses}>
                    <TableCell
                      className={classes.tableCell}
                      colSpan={prop.colspan}
                    />
                    <TableCell
                      className={classes.tableCell + " " + classes.tableCellTotal}
                    >
                      Total
                    </TableCell>
                    <TableCell
                      className={
                        classes.tableCell + " " + classes.tableCellAmount
                      }
                    >
                      {prop.amount}
                    </TableCell>
                    {tableHead.length - (prop.colspan - 0 + 2) > 0 ? (
                      <TableCell
                        className={classes.tableCell}
                        colSpan={tableHead.length - (prop.colspan - 0 + 2)}
                      />
                    ) : null}
                  </TableRow>
                );
              }
              if (prop.purchase) {
                return (
                  <TableRow key={key} hover={hover} className={tableRowClasses}>
                    <TableCell
                      className={classes.tableCell}
                      colSpan={prop.colspan}
                    />
                    <TableCell
                      className={classes.tableCell + " " + classes.right}
                      colSpan={prop.col.colspan}
                    >
                      {prop.col.text}
                    </TableCell>
                  </TableRow>
                );
              }
              return (
                <TableRow
                  key={key}
                  hover={hover}
                  className={classes.tableRow + " " + tableRowClasses}
                >
                  {prop.map((prop, key) => {
                    const tableCellClasses =
                      classes.tableCell +
                      " " +
                      cx({
                        [classes[colorsColls[coloredColls.indexOf(key)]]]:
                          coloredColls.indexOf(key) !== -1,
                        [customCellClasses[customClassesForCells.indexOf(key)]]:
                          customClassesForCells.indexOf(key) !== -1
                      });
                    return (
                      <TableCell className={tableCellClasses} key={key}>
                        {prop}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
  hover: false,
  colorsColls: [],
  coloredColls: [],
  striped: false,
  customCellClasses: [],
  customClassesForCells: [],
  customHeadCellClasses: [],
  customHeadClassesForCells: []
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  // tableHead: PropTypes.arrayOf(PropTypes.string),
  tableHead: PropTypes.array,
  // Of(PropTypes.arrayOf(PropTypes.node)) || Of(PropTypes.object),
  tableData: PropTypes.array,
  hover: PropTypes.bool,
  coloredColls: PropTypes.arrayOf(PropTypes.number),
  // Of(["warning","primary","danger","success","info","rose","gray"]) - colorsColls
  colorsColls: PropTypes.array,
  customCellClasses: PropTypes.arrayOf(PropTypes.string),
  customClassesForCells: PropTypes.arrayOf(PropTypes.number),
  customHeadCellClasses: PropTypes.arrayOf(PropTypes.string),
  customHeadClassesForCells: PropTypes.arrayOf(PropTypes.number),
  striped: PropTypes.bool,
  // this will cause some changes in font
  tableShopping: PropTypes.bool
};
