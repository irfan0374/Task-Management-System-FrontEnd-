import React, { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { createTask } from '../Api/taskApi';
import { useSelector } from 'react-redux'

const FormModal = ({ isOpen, closeModal }) => {
    
    const {_id} = useSelector(state => state.userReducer.user)
 
    const onSubmit=async()=>{
        try {
            const res=await createTask({...values,_id})
            if (res?.status === 201) {
                toast.success("Task added successfully!");
             closeModal();
          }
        } catch (error) {
            console.log(error.message)
            toast.error(error.response?.data?.status)
        }
       } 

    const { values, errors, touched, getFieldProps, handleSubmit } = useFormik({
        initialValues: {
            taskTitle: "",
            PriorityLevel: "",
            description: "",
        
            dueDate: "",
            reminderDate: ""
        },
        onSubmit
    });

   
   if (!isOpen) return null;
    return (
        <>
        

    
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="modal-box relative bg-white p-6 rounded shadow-lg z-10">
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                        <h3 className="font-bold text-lg">Add Task</h3>
                        <form onSubmit={handleSubmit} className="py-4 space-y-4">
                            <div>
                                <label className="block text-sm font-medium">Task Title</label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full mt-1"
                                    {...getFieldProps('taskTitle')}
                                    placeholder="Task title"
                                    required
                                />
                                {errors.taskTitle && touched.taskTitle && (
                                    <p className="text-red-800 text-sm">{errors.taskTitle}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Priority Level</label>
                                <select
                                    className="select select-bordered w-full mt-1"
                                    {...getFieldProps('PriorityLevel')}
                                >
                                    <option value="">Select Priority Level</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                    <option value="Normal">Normal</option>
                                </select>
                                {errors.PriorityLevel && touched.PriorityLevel && (
                                    <p className="text-red-800 text-sm">{errors.PriorityLevel}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Description</label>
                                <textarea
                                    className="textarea textarea-bordered w-full mt-1"
                                    {...getFieldProps('description')}
                                    placeholder="Task description"
                                    required
                                />
                                {errors.description && touched.description && (
                                    <p className="text-red-800 text-sm">{errors.description}</p>
                                )}
                            </div>

                           

                            <div>
                                <label className="block text-sm font-medium">Due Date</label>
                                <input
                                    type="date"
                                    className="input input-bordered w-full mt-1"
                                    {...getFieldProps('dueDate')}
                                    required
                                />
                                {errors.dueDate && touched.dueDate && (
                                    <p className="text-red-800 text-sm">{errors.dueDate}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Reminder Date</label>
                                <input
                                    type="date"
                                    className="input input-bordered w-full mt-1"
                                    {...getFieldProps('reminderDate')}
                                    required
                                />
                                {errors.reminderDate && touched.reminderDate && (
                                    <p className="text-red-800 text-sm">{errors.reminderDate}</p>
                                )}
                            </div>

                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    className="btn btn-ghost"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            
        </>
    );
};

export default FormModal;
