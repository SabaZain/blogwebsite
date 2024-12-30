"use client";
import { useState} from 'react';

interface Comment {
    name: string;
    comment: string;
}

const CommentSection = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [name, setName] = useState<string>("");
    const [comment, setComment] = useState<string>("");
    const [isEditing, setIsEditing] = useState<number | null>(null);
    const [editName, setEditName] = useState<string>("");
    const [editComment, setEditComment] = useState<string>("");
        

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        if(isEditing !== null){
            const updatedComments = comments.map((c, index) => 
            index === isEditing
            ? { name:editName, comment:editComment}
            : c
            );
            setComments(updatedComments);
            setIsEditing(null);
            setEditName("");
            setEditComment("");
        } else {
            setComments([...comments, {name, comment}]);
            setName("");
            setComment("");
        }
    };

    const handleEdit = (index:number) => {
        setIsEditing(index);
        setEditName(comments[index].name);
        setEditComment(comments[index].comment);
    };

    const handleCancel = () => {
        setIsEditing(null);
        setEditName("");
        setEditComment("");
    };


  return (
    <div className='p-6'>
    <h1 className='text-2xl mt-4 font-bold'>Comments</h1>
    <form onSubmit={handleSubmit} className='mb-6'>
        <div>
            <label className='text-gray-800 font-bold mb-2'>Name: </label>
            <div>
            <input
             type="text"
            value={isEditing !== null ? editName :name}
            onChange={(e) => (isEditing !== null ? setEditName(e.target.value) : setName(e.target.value))}
            required
            className='p-2 border-black mb-4'
            />
            </div>
        </div>
       <div>
            <label className='text-gray-800 font-bold mb-2'>Comment: </label>
            <div>
            <textarea
            value={isEditing !== null ? editComment : comment}
            onChange={(e) => (isEditing !== null ? setEditComment(e.target.value) : setComment(e.target.value))}
            required
            className='p-2 border-black'
            />
            </div>
        </div>
        
        <button 
        type="submit"
        className='bg-black text-white p-2 rounded-md mt-3'
        >
            {isEditing !== null ? "Update Comment" : "Submit Comment"}
        </button>
        {isEditing !== null && (
            <button
            type='button'
            onClick={handleCancel}
            className='bg-black text-white p-2 rounded-md m-2'
            >
                Cancel
            </button>
        )}
    </form>
    <div>
        {comments.map((commentData, index) => (
            <div key={index} className='bg-slate-500 p-2'>
                <p>{commentData.name}</p>
                <p className="text-wrap">{commentData.comment}</p>
            <button
            onClick={() => handleEdit(index)}
            className='bg-black text-white p-2 m-2 rounded-md'
            >
            Edit
            
            </button>
            </div>
        ))}
        </div>
    </div>
  );
};

export default CommentSection;
