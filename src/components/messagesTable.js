import React, { Component } from "react";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { format } from "date-fns";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

class MessagesTable extends Component {

    constructor(props) {
        super(props);
        const data = this.fetchData();
        this.state = {
            data: data,
            checkedId: [],
            rowsPerPage: 10,
            page: 0,
            searchfieldValue: "",
            filteredData: data
        }
    }

    fetchData = () => {
        const date = new Date();
        const data = [
            {
                id: "000000001",
                title: "Hello, world!",
                text: "test",
                date: date
            },
            {
                id: "000000002",
                title: "Тестовая новость!",
                text: "Это тест отображения текста новостей, всем привет!",
                date: date
            },
            {
                id: "000000003",
                title: "Новый функционал",
                text: "В приложение добавлены следующие функции:\n1) Новые иконки\n2) Настройки фильтрации",
                date: date
            },
            {
                id: "000000004",
                title: "Hello, world!",
                text: "test",
                date: date
            },
            {
                id: "000000005",
                title: "Hello, world!",
                text: "test",
                date: date
            },
            {
                id: "000000006",
                title: "Hello, world!",
                text: "test",
                date: date
            },
            {
                id: "000000007",
                title: "Hello, world!",
                text: "test",
                date: date
            },
            {
                id: "000000008",
                title: "Hello, world!",
                text: "test",
                date: date
            },
            {
                id: "000000009",
                title: "Hello, world!",
                text: "test",
                date: date
            },
            {
                id: "000000010",
                title: "World war II",
                text: "Huge date",
                date: date
            }
        ];
        return data;
    };

    handleClick = (id) => {
        if (this.state.checkedId.includes(id)){
            const checkedId = this.state.checkedId.filter((value) => (value !== id));
            this.setState({ checkedId: checkedId });
        }
        else {
            this.setState({checkedId: [...this.state.checkedId, id]});
        }
    };

    onSelectAll = () => {
        if (this.state.checkedId.length === this.state.filteredData.length){
            this.setState({checkedId: []});
        }
        else {
            let checkedId = [];
        this.state.filteredData.forEach((value, index) => {
            checkedId.push(value.id);
        });
        this.setState({checkedId: checkedId});
        }
    };

    handleChangePage = (e, page) => {
        let newPage = (page < 0) ? 0 : page;
        const maxPage = Math.trunc(this.state.filteredData.length / this.state.rowsPerPage) + 1;
        newPage = (page > maxPage) ? maxPage : page;
        this.setState({page: newPage});
    }

    handleChangeRowsPerPage = (event) => this.setState({rowsPerPage: +event.target.value, page: 0});
    
    handleInput = (event) => {
        const filteredData = this.state.data.filter((value) => this.filterBySearch(value, event.target.value));
        this.setState({searchfieldValue: event.target.value, filteredData: filteredData, page: 0});
    }

    filterBySearch = (value, searchValue = this.state.searchfieldValue) => {
        if (value === "") return true;
        else {
            return value.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1; 
        }
    };

    render () {
        const { classes } = this.props;
        const { checkedId, rowsPerPage, page } = this.state;
        const start = page * this.state.rowsPerPage;
        const end = (page + 1) * this.state.rowsPerPage;
        const data = this.state.data.filter((value) => this.filterBySearch(value)).slice(start, end);
        const emptyRows = this.state.rowsPerPage - data.length;
        return (
            <Paper className={classes.paper}>
                <Toolbar
                    className={`${classes.root} ${(this.state.checkedId.length > 0) ? classes.highlight : ""}`}
                    >
                    <div className={classes.title}>
                        {this.state.checkedId.length > 0 ? (
                        <Typography color="inherit" variant="subtitle1">
                            {this.state.checkedId.length} выбрано
                        </Typography>
                        ) : (
                        <Typography variant="h6" id="tableTitle">
                            Список публикаций
                        </Typography>
                        )}
                    </div>
                    <div className={classes.spacer} />
                    <div className={classes.actions}>
                        {this.state.checkedId.length > 0 ? (
                        <Tooltip title="Удалить">
                            <IconButton aria-label="delete">
                            <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                        ) : (
                        <Tooltip title="Фильтр по пользователям">
                            <IconButton aria-label="filter list">
                            <FilterListIcon />
                            </IconButton>
                        </Tooltip>
                        )}
                    </div>
                    <div className = { classes.searchfield }>
                    <TextField
                        className={classes.margin}
                        id="input-with-icon-textfield"
                        label="Поиск по заголовкам"
                        fullWidth
                        value = {this.state.searchfieldValue}
                        onChange = {this.handleInput}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                        }}
                    />
                    </div>
                    </Toolbar>
                <div className = {classes.tableWrapper}>
                <Table
                    className={classes.table}
                    aria-labelledby="tableTitle"
                    size={'medium'}
                >
                    <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                        <Checkbox
                            indeterminate={ checkedId.length > 0 && checkedId.length < this.state.filteredData.length }
                            checked={ checkedId.length === this.state.filteredData.length }
                            onChange={this.onSelectAll}
                            inputProps={{ 'aria-label': 'Выбрать все публикации' }}
                        />
                        </TableCell>
                        <TableCell
                            align={'left'}
                        >
                        {"Дата публикации"}
                        </TableCell>
                        <TableCell
                            align={'left'}
                        >
                        {"Заголовок"}
                        </TableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                    {
                        data.map((row, index) => {
                        const isItemSelected = ( checkedId.includes(row.id) );
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                            <TableRow
                            hover
                            onClick={() => this.handleClick(row.id)}
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.id}
                            selected={isItemSelected}
                            >
                            <TableCell padding="checkbox">
                                <Checkbox
                                checked={isItemSelected}
                                inputProps={{ 'aria-labelledby': labelId }}
                                onClick={() => this.handleClick(row.id)}
                                />
                            </TableCell>
                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                {String(format(row.date, 'yyyy-MM-dd kk:mm:ss'))}
                            </TableCell>
                            <TableCell align="left">{row.title}</TableCell>
                            </TableRow>
                        );
                        })}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 49 * emptyRows }}>
                        <TableCell colSpan={6} />
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={this.state.filteredData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                    'aria-label': 'previous page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'next page',
                }}
                labelDisplayedRows = {({ from, to, count }) => `${from}-${to} из ${count}`}
                labelRowsPerPage ={ "Элементов на странице:" }
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
            </div>
            </Paper>
        )
    }
}

const style = theme => ({
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    mainWindow: {
        padding: 30,
        margin: "auto",
        width: 700,
        height: 500,
        boxShadow: ['0px 1px 3px 0px rgba(0,0,0,0.2)', '0px 1px 1px 0px rgba(0,0,0,0.14)', '0px 2px 1px -1px rgba(0,0,0,0.12)'],
        borderRadius: 8,
        background: theme.modalBackground,
        color: theme.text,
        position: "relative"
    },
    mainWindowTitle: {    
        fontSize: 18,
        fontWeight: "300",
        lineHeight: "56px"
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        position: "relative"
      },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    searchfield: {
        position: "absolute",
        right: 50,
        left: 300
    },
    '@global':{
        '.MuiTableCell-root' : {
            backgroundColor: theme.modalBackground,
            color: theme.text,
            borderBottomColor: theme.text,
            fontFamily: "'Roboto Condensed', sans-serif!important",
           fontWeight: "300"
        },
        ".MuiToolbar-root" : {
            backgroundColor: theme.modalBackground,
            color: theme.text,
            fontFamily: "'Roboto Condensed', sans-serif!important",
            fontWeight: "300"
        },
        ".MuiIconButton-root" : {
            color: theme.text,
            fontFamily: "'Roboto Condensed', sans-serif!important",
            fontWeight: "300"
        },
        ".MuiInputBase-root" : {
            color: theme.text,
            fontFamily: "'Roboto Condensed', sans-serif!important",
            fontWeight: "300"
        },
        ".MuiFormLabel-root" : {
            color: theme.text,
            fontFamily: "'Roboto Condensed', sans-serif!important",
            fontWeight: "300"
        },
        ".MuiInput-underline:before" : {
            borderColor: [theme.text, "!important"]
        },
        ".MuiTablePagination-root" : {
            color: theme.text
        },
        ".MuiToolbar-root.Mui-disabled" : {
            color: "red"
        },
        ".MuiSvgIcon-root" : {
            fill: theme.text
        },
        ".MuiIconButton-root.Mui-disabled" : {
            "& .MuiSvgIcon-root": {
                fill: theme.svgDisabled
            }
        },
        ".MuiTypography-root":{
            fontFamily: "'Roboto Condensed', sans-serif!important",
            fontWeight: "300"
        }
    }
})

export default withStyles(style)(MessagesTable)