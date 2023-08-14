import React, { useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "./categori.css";
import AddCategori from "./AddCategori";
type Props = {};

const Categories = (props: Props) => {
    interface DataType {
        key: string;
        name: string;
        age: number;
        address: string;
        tags: string[];
    }

    const columns: ColumnsType<DataType> = [
        {
            title: "Tên danh mục",
            dataIndex: "name",
            key: "name",
            render: (text) => <a>{text}</a>,
        },

        {
            title: "Ảnh",
            key: "tags",
            dataIndex: "tags",
            width: 500,
            render: (_, { tags }) => (
                <div className={"categori-logo"}>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/order-94f58.appspot.com/o/images%2FSHOP%20(1).png?alt=media&token=aa1fc61d-956d-4f7f-8f07-d07f7b50bb94"
                        alt=""
                    />
                </div>
            ),
        },
        {
            title: "Thao tác",
            key: "data._id",
            render: (data) => (
                <div>
                    <Space size="middle" style={{ marginRight: 10 }}>
                        <Link to={`/manager/categoris/edit/${data._id}`}>
                            <EditOutlined />
                        </Link>
                    </Space>
                    <Space size="middle">
                        <a>
                            <DeleteOutlined onClick={() => null} />
                        </a>
                    </Space>
                </div>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: "1",
            name: "John Brown",
            age: 32,
            address: "New York No. 1 Lake Park",
            tags: ["nice", "developer"],
        },
        {
            key: "2",
            name: "Jim Green",
            age: 42,
            address: "London No. 1 Lake Park",
            tags: ["loser"],
        },
        {
            key: "3",
            name: "Joe Black",
            age: 32,
            address: "Sydney No. 1 Lake Park",
            tags: ["cool", "teacher"],
        },
    ];
    const [isModalOpen, setIsModalOpen] = useState(false);

  
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h5>Danh mục sản phẩm</h5>
                <Button onClick={() => setIsModalOpen(true)}>
                    Thêm danh mục
                </Button>
            </div>
            <hr />
            <div className="table-categoris">
                <Table columns={columns} dataSource={data} />;
            </div>
            <AddCategori
                isModalOpen={isModalOpen}
                callBack={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default Categories;
