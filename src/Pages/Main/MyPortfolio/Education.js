import React from 'react';

const Education = () => {
    return (
        <div>
            <h1 className='text-primary text-lg font-bold my-2'>Educational Qualification:</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Exam Title</th>
                            <th>Concentration</th>
                            <th>Institute</th>
                            <th>Result</th>
                            <th>Pas.Year</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>Bachelor of Science (BSc)</td>
                            <td>Computer Science & Engineering </td>
                            <td>Uttara University </td>
                            <td>CGPA:2.82 out of 4  </td>
                            <td>2019</td>
                            <td>4</td>
                        </tr>

                        <tr>
                            <th>2</th>
                            <td>Diploma in Computer Engineering.  </td>
                            <td>Computer Engineering </td>
                            <td>Kurigram Polytechnic Institute,Kurigram.</td>
                            <td>CGPA:3.43 out of 4  </td>
                            <td>2014</td>
                            <td>4</td>
                        </tr>

                        <tr>
                            <th>3</th>
                            <td>SSC</td>
                            <td>Science</td>
                            <td>Durgapur High School</td>
                            <td>CGPA:4.94 out of 5 </td>
                            <td>2010</td>
                            <td>5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Education;