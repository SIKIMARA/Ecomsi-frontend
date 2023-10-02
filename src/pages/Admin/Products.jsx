import React from 'react';
import {
  Card,
  CardHeader,
   Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import DropzoneComponent from './DropzoneComponent';
import { useEffect } from 'react';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';


const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

const TABLE_HEAD = ["Product", "Infos", "Actions"];

const TABLE_ROWS = [
  {
    id: 1,
    productName: "Product 1",
    des: "Description 1",
    price: 10.99,
    quantity: 100,
    img: "https://example.com/product1.jpg",
    badge: true,
    color: "red",
    brand: "Brand 1",
    category: "Category 1",
  },
  {
    id: 2,
    productName: "Product 2",
    des: "Description 2",
    price: 19.99,
    quantity: 50,
    img: "https://example.com/product2.jpg",
    badge: false,
    color: "blue",
    brand: "Brand 2",
    category: "Category 2",
  },
  // Add more product data as needed
];

export function Products() {
    const [success, setSuccess] = React.useState(false);
    const [products, setProducts] = React.useState([]);
   
    const [addProductData, setAddProductData] = React.useState({
        id:0,
        productName:"",
        des:"",
        price:0,
        quantity:0,
        img:"",
        badge: false,
        color: "blue",
        brand: "",
        category: "",
    });
    useEffect(() => {
        fetch('http://localhost:8080/products/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setProducts(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });
    

    const DeleteProduct = (id) => {
        fetch(`http://localhost:8080/products/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setSuccess(true);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const HandleSave = () => {
        fetch('http://localhost:8080/products/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(addProductData),
          })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
              setSuccess(true);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    }
   

  return (
    <div>
    <Card className="h-full w-[70vw]">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Products List
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all products
            </Typography>
          </div>
         
        </div>
       
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map(
              ({ id, productName, des, price, quantity, img,color }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={id}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={img} alt={productName} size="sm" />
                        <div className="flex flex-col w-80">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {productName}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {des}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          ${price}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {quantity} in stock
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70 flex items-center gap-2"
                        >
                          color :
                          <div className={`p-2 bg-${color}-600 rounded-full w-2 border-black border-solid `}>

                          </div>
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit Product">
                        <IconButton variant="text" className='text-green-800 text-2xl'>
                            <AiFillEdit  />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Delete Product">
                        <IconButton onClick={()=>DeleteProduct(id)} variant="text" className='text-red-800 text-2xl'>
                            <AiFillDelete  />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
    <Card className="h-full w-[70vw] p-5">
        {
            success && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline"> Product added successfully</span>
            </div>
        }
        <CardHeader className="rounded-none"  floated={false} shadow={false} >
            <Typography variant="h5" color="blue-gray">
             Add product
            </Typography>
        </CardHeader>
        <CardBody>
            <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                    <Typography variant="body1" color="blue-gray">
                        Image
                    </Typography>
                    <DropzoneComponent
            image={addProductData.img}
            onImageChange={(imageData) =>
                setAddProductData((prevData) => ({
                ...prevData,
                img: imageData,
                }))
            }
            />
                </div>
                <div className="flex flex-col gap-2">
                    <Typography variant="body1" color="blue-gray">
                        Product Name
                    </Typography>
                    <Input
                        type="text"
                        color="lightBlue"
                        placeholder="Product Name"
                        value={addProductData.productName}
                        onChange={(e) => setAddProductData({...addProductData,productName:e.target.value})}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Typography variant="body1" color="blue-gray">
                        Description
                    </Typography>
                    <Input
                        type="text"
                        color="lightBlue"
                        placeholder="Description"
                        value={addProductData.des}
                        onChange={(e) => setAddProductData({...addProductData,des:e.target.value})}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Typography variant="body1" color="blue-gray">
                        Price
                    </Typography>
                    <Input
                        type="number"
                        color="lightBlue"
                        placeholder="Price"
                        value={addProductData.price}
                        onChange={(e) => setAddProductData({...addProductData,price:e.target.value})}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Typography variant="body1" color="blue-gray">
                        Quantity
                    </Typography>
                    <Input
                        type="number"
                        color="lightBlue"
                        placeholder="Quantity"
                        value={addProductData.quantity}
                        onChange={(e) => setAddProductData({...addProductData,quantity:e.target.value})}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Typography variant="body1" color="blue-gray">
                        Brand
                    </Typography>
                    <Input
                        type="text"
                        color="lightBlue"
                        placeholder="Brand"
                        value={addProductData.brand}
                        onChange={(e) => setAddProductData({...addProductData,brand:e.target.value})}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Typography variant="body1" color="blue-gray">
                        Category
                    </Typography>
                    <Input
                        type="text"
                        color="lightBlue"
                        placeholder="Category"
                        value={addProductData.category}
                        onChange={(e) => setAddProductData({...addProductData,category:e.target.value})}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Typography variant="body1" color="blue-gray">
                        Color
                    </Typography>
                    <Input
                        type="text"
                        color="lightBlue"
                        placeholder="Color"
                        value={addProductData.color}
                        onChange={(e) => setAddProductData({...addProductData,color:e.target.value})}
                    />
                </div>
              </div>
        </CardBody>
        <CardFooter>
            <Button color="lightBlue" onClick={HandleSave}>
                Add Product
            </Button>
        </CardFooter>

    </Card>

   
    </div>
  );
}
