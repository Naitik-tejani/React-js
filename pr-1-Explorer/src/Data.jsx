import React, { Component } from 'react';

const TableRow = ({ data }) => {
    const { grid, name, email, password, course, city } = data;
    return (
        <tr style={{ backgroundColor: '#f9f9f9', textAlign: 'left' }}>
            <td>{grid}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td>{course}</td>
            <td>{city}</td>
        </tr>
    );
};

class Data extends Component {
    render() {
        const { tdata } = this.props;

        return (
            <div style={{ margin: 'auto', width: '80%', padding: '20px', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <h1 style={{ textAlign: 'center', color: '#333', fontFamily: 'Arial, sans-serif', marginBottom: '20px' }}>STUDENT DATA</h1>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }} border={1}>
                    <thead>
                        <tr style={{ backgroundColor: '#4CAF50', color: 'white', textAlign: 'left' }}>
                            <th style={{ padding: '12px' }}>GRID</th>
                            <th style={{ padding: '12px' }}>NAME</th>
                            <th style={{ padding: '12px' }}>EMAIL</th>
                            <th style={{ padding: '12px' }}>PASSWORD</th>
                            <th style={{ padding: '12px' }}>COURSE</th>
                            <th style={{ padding: '12px' }}>CITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tdata.map((data, index) => (
                            <TableRow key={data.grid || index} data={data} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Data;
