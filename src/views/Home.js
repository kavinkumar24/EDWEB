import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Cell } from 'recharts';
import { Card, Typography } from "@material-tailwind/react";
import { coursesCard } from './dummydata';
import OnlineCourses from './OnlineCourses';
import Views from './Viewscount';
import PdfMaterials from './demo/CollapseMenuItemView1';
import { useState } from 'react';
const TABLE_HEAD = ["Topics", "Category", "Resource Link", ""];

const TABLE_ROWS = [
  {
    Topics: "Data Structures and algorithms",
    Category: "Intermediate",
    Link: "https://www.programiz.com/dsa",
  },
  {
    Topics: "Python",
    Category: "Bascis",
    Link: "https://www.w3schools.com/python/python_intro.asp",
  },{
    Topics: "Data Base Management",
    Category: "Bascis",
    Link: "https://www.simplilearn.com/what-is-database-management-article#:~:text=A%20database%20management%20system%20(DBMS,is%20accurate%2C%20available%20and%20accessible.",
  },
  {
    Topics: "Django",
    Category: "Intermediate",
    Link: "https://www.geeksforgeeks.org/django-basics/",
  },
  {
    Topics: "Streamlit",
    Category: "Advanced",
    Link: "https://docs.streamlit.io/library/get-started",
  },
  {
    Topics: "React",
    Category: "Advanced",
    Link: "https://www.freecodecamp.org/news/learn-react-basics-in-10-minutes/",
  },
]


const data = [
	{
	  name: 'Feb',
	  Timespent: 12,
	},
	{
	  name: 'March',
	  Timespent: 7,
	},
	{
	  name: 'Apr',
	  Timespent: 3,
	},
	{
	  name: 'May',
	  Timespent: 5,
	},
	{
	  name: 'June',
	  Timespent: 13,
	},
	{
	  name: 'July',
	  Timespent: 20,
	},
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];
  
const HomePage = () => {
  // Replace this with your actual data
  const [views, setViews] = useState({
    Python: 0,
    C: 0,
    Java: 0,
  });
  return (
    <div className="container mx-auto p-4" style={{overflow:'hidden'}}>
      <h1 className="text-4xl font-bold mb-4">Education</h1>
      <Views views=""/>

      <p className="mb-8">
        Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research.
      </p>
      <div className="flex">
        <div className="w-1/2 mr-2">
          
          <div className="bg-gray-200 h-78 rounded-lg flex items-center justify-center text-gray-600 p-3" style={{width: '470px',height:'360px',position:'absolute',left:'10px',boxShadow:'1px 0px 6px grey'}}>
            <BarChart
			width={500}
			height={300}
			data={data}
			margin={{
			top: 5,
			right: 30,
			left: 20,
			bottom: 5,
			}}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Timespent">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Bar>
    </BarChart>
          </div>
        </div>
        <div className="w-1/2 ml-4" style={{position:'relative',left:'30px'}}>
          
<Card className="overflow-hidden h-95 w-4" style={{width:'496px',borderRadius:'5px',boxShadow:'1px 0px 10px grey'}}>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
      {TABLE_ROWS.map(({ Topics, Category, Link }, index) => (
        <tr key={Topics} className="even:bg-blue-gray-50/50">
          <td className="p-4">
            <Typography variant="small" color="blue-gray" className="font-normal">
              {Topics}
            </Typography>
          </td>
          <td className="p-4">
            <Typography variant="small" color="blue-gray" className="font-normal">
              {Category}
            </Typography>
          </td>
          <td className="p-4">
        <a href={Link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline hover:dashed">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Link
          </Typography>
        </a>
      </td>
          
        </tr>
      ))}
    </tbody>

      </table>
    </Card>
        </div>
      </div>

      <section className='homeAbout'>
        <div className='container'>
          <br></br>
          <h1>Courses</h1>
          <br></br>

         
        </div>
        <OnlineCourses />
      </section>

      

    </div>
  )
}

export default HomePage



