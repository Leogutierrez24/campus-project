import { React } from "react";
import "./addSubjects.scss";
import { Table, TableHead, TableBody } from "../tables/Tables";
const AddSubjects = () => {
    return(
        <Table>
            <TableHead>
                <th>Primer titulo</th>
                <th>Segundo Titulo</th>
                <th>Tercer Titulo</th>
            </TableHead>
            <TableBody>
                <tr>
                    <td>Primer Elemento</td>
                    <td>Segundo Elemento</td>
                    <td>Tercer Elemento</td>
                </tr>
            </TableBody>
        </Table>
    );
}

export default AddSubjects;