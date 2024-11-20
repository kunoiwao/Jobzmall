import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import VideocamIcon from '@mui/icons-material/Videocam';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import TaskIcon from '@mui/icons-material/Task';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessIcon from '@mui/icons-material/Business';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { menuList } from "@/data/search";

const Category = () => {
    return(
        <>
            <div className="w-full mt-1">
                {menuList.map((item) => (
                    <div key={item.id} className='flex items-center sm:px-14 py-6 hover:bg-gray-200 cursor-pointer justify-between'>
                        <div className='flex items-center'>
                            <div className='mr-7 text-blue-500 border rounded-lg p-2'>
                                {item.id === 1 && <BusinessCenterIcon />}
                                {item.id === 2 && <VideocamIcon />}
                                {item.id === 3 && <ElectricBoltIcon />}
                                {item.id === 4 && <TaskIcon />}
                                {item.id === 5 && <SupervisorAccountIcon />}
                                {item.id === 6 && <BusinessIcon />}
                            </div>
                            <div>
                                <div className="text-sm font-medium mb-3 text-gray-900">
                                    {item.title}
                                </div>
                                <div className='text-gray-600 text-sm'>{item.description}</div>
                            </div>
                        </div>
                        <div className="flex">
                            <ChevronRightIcon />
                        </div>
                    </div>
                    
                ))}
            </div>
        </>
    )
}

export default Category;