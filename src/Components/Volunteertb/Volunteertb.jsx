import { FaTrash } from "react-icons/fa";
const Volunteertb = ({volunteer}) => {
  const {_id,name,email,regdate}=volunteer;
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:2000/volunteers/${volunteerId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        onDelete(volunteerId); // Update state or perform any necessary actions on successful deletion
        console.log('Volunteer deleted successfully');
      } else {
        console.error('Error deleting volunteer:', data.error);
      }
    } catch (error) {
      console.error('Error deleting volunteer:', error);
    }
  };

      
    return (
        <div>
          
             <tr>
                      <td class="pr-4 py-3 ">{name}</td>
                      <td class="px-4 py-3">{email}</td>
                      <td class="px-4 py-3">{regdate}</td>
                      <td class="w-10 text-center">
                      <button onClick={handleDelete}><FaTrash /></button>  
                      </td>
                    </tr>
                   
        </div>
    );
};

export default Volunteertb;