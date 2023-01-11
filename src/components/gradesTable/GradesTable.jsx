import { React } from "react";
import { Table, TableHead, TableBody } from "../tables/Tables";
import GradesItems from "../gradesItem/GradesItem";
import "./gradesTable.scss";

const GradesTable = ({props}) => {
    return(
        <Table nameClass={"grades-table"}>
            <TableHead nameClass={"grades-table__header"}>                
                <th className="header-element__cod">Código</th>
                <th className="header-element__subject">Materia</th>
                <th className="header-element__calif">Nota</th>
                <th className="header-element__status">Estado de la materia</th>
                <th className="header-element__date">Fecha</th>                
            </TableHead>
            <TableBody nameClass={"grades-table__body"}>
                {
                    props?.map((item) => {
                        return(
                            <GradesItems props={item} key={item.code}/>
                        )
                    })
                }
            </TableBody>
        </Table>
    );
}

export default GradesTable;