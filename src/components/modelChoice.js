import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import BeaverIcon from "./beaverIcon";
import SearchIcon from "./searchIcon";
import AddIcon from "./addIcon";
import CopyIcon from "./copyIcon";
import RemoveIcon from "./removeIcon";
import Radio from "./radio";
import Scrollbar from "react-scrollbars-custom";
import Modal from "./Modal";

const useStyles = makeStyles({
    wrapper: {
        background: "#2F3B52",
        boxShadow: "0px 12px 114px rgba(0, 0, 0, 0.5)",
        borderRadius: "8px 8px 0px 0px",
        width: 680,
        height: 900,
        position: 'relative',
    },
    text: {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: "16px",
        alignItems: "center",
        color: "#FFFFFF"
    },
    upperHalf:{
        padding: "50px 70px 28px 70px",
        borderBottom: "1px solid #20293C",
        height: 140
    },
    title:{
        fontWeight: 300,
        fontSize: 30,
        lineHeight: "32px",
    },
    avatarIcon: {
        width: 20,
        height: 14,
    },
    avatarWrapper: {
        width: 20,
        height: 20,
        paddingTop: 3
    },
    userRoleWrapper: {
        display: "flex",
        marginTop: 24,
        height: 20
    },
    userRole: {
        fontSize: 16,
        lineHeight: "20px",
        marginLeft: 10,
        color: "#869AAC"
    },
    bottomHalf:{
        padding: "24px 70px",
        height: "calc(100% - 140px)"
    },
    searchField: {
        background: "#242E42",
        borderRadius: "17px 0 0 17px",
        border: "none",
        padding: "2px 17px",
        color: "#FFFFFF",
        width: 453,
        height: 34,
        lineHeight: "34px",
        fontSize: 25,
        "&:focus": {
            outline: "none"
        }
    },
    searchWrapper: {
        display: 'flex',
    },
    searchButton: {
        width: 44,
        height: 34,
        background: "#1F8EFA",
        borderRadius: "0px 17px 17px 0px"
    },
    searchIcon: {
        width: 16,
        height: 16
    },
    searchIconWrapper: {
        width: 34,
        height: 34,
        padding: 9,
        marginLeft: 5
    },
    button: {
        display: 'flex',
        marginLeft: 40,
        "&:first-child":{
            marginLeft: 0
        }
    },
    buttonsWrapper: {
        display: 'flex',
        marginTop: 30
    },
    buttonText: {
        lineHeight: "20px",
        color: "#869AAC",
        marginLeft: 10,
        fontSize: 14
    },
    addIconWrapper:{
        width: 20,
        height: 20,
        paddingTop: 1
    },
    addIcon: {
        width: 19,
        height: 18
    },
    copyIconWrapper: {
        width: 20,
        height: 20,
    },
    copyIcon: {
        width: 17,
        height: 20,
    },
    removeIconWrapper: {
        width: 20,
        height: 20,
        paddingTop: 1
    },
    removeIcon: {
        width: 18, 
        heigth: 18
    },
    radio: {
        width: 13,
        height: 13,
        border: "1px solid #869AAC",
        borderRadius: 7.5,
        transition: "all 350ms cubic-bezier(0,.4,.6,1) 0ms",
        marginTop: 2.5
    },
    radioChecked: {
        border: "2px solid #FFFFFF",
        borderRadius: 6,
        background: "#6B75CA"
    },
    groupsBodyWrapper:{
    },
    groupWrapper:{
        marginBottom: 50,
        "&:last-child":{
            marginBottom: 0
        }
    },
    groupTitle: {
        color: "#69B5FF",
        fontWeight: 600,
        fontSize: 14,
        lineHeight: "16px",
    },
    modelWrapper: {
        
    },
    radioWrapper: {
        display: 'flex',
        margin: "20px 0"
    },
    modelTitle: {
        fontSize: 16,
        lineHeight: "18px",
        color: "#869AAC",
        marginLeft: 8
    },
    goToModelButton: {
        bottom: 70,
        right: 80,
        position: 'absolute',
    },
    acceptButton: {
        background: "#6B75CA",
        borderRadius: 20,
        padding: "8px 21px",
        transition: "all 350ms cubic-bezier(0,.4,.6,1) 0ms",
        border: "2px solid rgba(0,0,0,0)",
        "&:hover":{
            background: "rgba(0,0,0,0)",
            border: "2px solid #6B75CA"
        }

    },
    declineButton: {
        background: "#CA6B6B",
        borderRadius: 20,
        padding: "8px 21px",
        transition: "all 350ms cubic-bezier(0,.4,.6,1) 0ms",
        border: "2px solid rgba(0,0,0,0)",
        "&:hover":{
            background: "rgba(0,0,0,0)",
            border: "2px solid #CA6B6B"
        }

    }
});

export default function ModelChoice(props){
    const classes = useStyles();
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const handleSearchInput = (e) => {
        setSearch(e.target.value);
    };
    const [radio, setRadio] = useState(null);
    const handleRadioClick = (value) => {
        setRadio(value);
    };

    const sort = (obj) => {
        let res = {};
        let groups = [];
        obj.forEach(item => {
            if(!res.hasOwnProperty(item.group)){
                res[item.group] = [];
                groups.push(item.group);
            }
            res[item.group].push(item.model);
        });
        return [groups, res];
    };

    const generateGroups = ([groups, sortedModels]) => {
        return groups.map((group, groupInd) => (
            <div key={"group" + groupInd} className={classes.groupWrapper}>
                <div className={`${classes.text} ${classes.groupTitle}`}>{group}</div>
                <div className={classes.modelWrapper}>{generateRadios(sortedModels[group])}</div>
            </div>
        ));
    };

    const generateRadios = models => {
        return models.map((model, modelInd) => (
            <div key={"model" + modelInd} className={classes.radioWrapper}>
                <Radio root={classes.radio} checked={classes.radioChecked} value={model} variable={radio} onClick={handleRadioClick}/>
                <div className={`${classes.text} ${classes.modelTitle}`}>{model}</div>
            </div>
        ));
    };

    const models = [
        {model: "ФС", group: "СП.Канал ВС"},
        {model: "ЕРИБ", group: "РБ.Цифровая платформа"},
        {model: "Обвязка процессинга", group: "РБ.Эквайринг и банковские карты"},
        {model: "Smart Vista", group: "РБ.Эквайринг и банковские карты"},
        {model: "WAY 4", group: "РБ.Эквайринг и банковские карты"},
        {model: "MDM", group: "РБ.Массовая персонализация"},
        {model: "ЕПС", group: "РБ.Платежи и переводы"},
        {model: "Автоплатежи", group: "РБ.Платежи и переводы"},
        {model: "ЕКП", group: "РБ.Занять и сберегать"},
        {model: "CRM Розничный", group: "РБ.Забота о клиентах"},
    ];
    const [groups, sortedModels] = sort(models);
    return(
        <div className={classes.wrapper}>
            <div className={classes.upperHalf}>
                <div className={`${classes.text} ${classes.title}`}>{"Список моделей"}</div>
                <div className={classes.userRoleWrapper}>
                    <BeaverIcon fill={"#FFE600"} root={classes.avatarIcon} wrapper={classes.avatarWrapper}/>
                    <div className={`${classes.text} ${classes.userRole}`}>{"Архитектор"}</div>
                </div>
            </div>
            <div className={classes.bottomHalf}>
                <div className={classes.searchWrapper}>
                    <input type="text" className={`${classes.text} ${classes.searchField}`} value={search} onChange={handleSearchInput}/>
                    <div className={classes.searchButton}>
                        <SearchIcon fill="#FFFFFF" root={classes.searchIcon} wrapper={classes.searchIconWrapper}/>
                    </div>
                </div>
                <div className={classes.buttonsWrapper}>
                    <div className={classes.button}>
                        <AddIcon fill={"#869AAC"} root={classes.avatarIcon} wrapper={classes.avatarWrapper}/>
                        <div className={`${classes.text} ${classes.buttonText}`}>{"Создать модель"}</div>
                    </div>
                    <div className={classes.button}>
                        <CopyIcon fill={"#869AAC"} root={classes.avatarIcon} wrapper={classes.avatarWrapper}/>
                        <div className={`${classes.text} ${classes.buttonText}`}>{"Скопировать модель"}</div>
                    </div>
                    <div className={classes.button}>
                        <RemoveIcon fill={"#869AAC"} root={classes.avatarIcon} wrapper={classes.avatarWrapper}/>
                        <div className={`${classes.text} ${classes.buttonText}`}>{"Удалить модель"}</div>
                    </div>
                </div>
                <Scrollbar trackYProps={{style: {width: 4}}} thumbYProps={{style: {background: "rgba(31, 142, 250, 0.4)",width: 4,borderRadius: 2}}} style={{height: "calc(100% - 100px)", marginTop: 34}}>
                    <div className={classes.groupsBodyWrapper}>
                        {generateGroups([groups, sortedModels])}
                    </div>
                </Scrollbar>
            </div>
            <Modal
                open = {open}
                close = {() => setOpen(false)}
                title={"Перейти к модели"}
                text={"Вы уверены, что хотите перейти к выбранной модели?"}
            >
                <div className={`${classes.text} ${classes.declineButton}`} style={{marginRight: 10}}>
                    {"Отмена"}
                </div>
                <div className={`${classes.text} ${classes.acceptButton}`}>
                    {"Перейти"}
                </div>
            </Modal>
            <div className={`${classes.text} ${classes.acceptButton} ${classes.goToModelButton}`} onClick={() => setOpen(!open)}>{"Перейти к модели"}</div>
        </div>
    )
}