import Image from "next/image";

const RecentApplication = () => {
    // Data aplikasi terbaru
    const applications = [
        {
            companyLogo: '/alfa.svg', 
            jobTitle: 'Software Engineer',
            company: 'Acme Corp',
            date: '2024-12-11',
            status: 'Applied',
        },
        {
            companyLogo: '/alfa.svg',
            jobTitle: 'Data Scientist',
            company: 'Tech Innovators',
            date: '2024-12-09',
            status: 'Interviewing',
        },
        {
            companyLogo: '/alfa.svg',
            jobTitle: 'UI/UX Designer',
            company: 'Design Studio',
            date: '2024-12-05',
            status: 'Accepted',
        },
        {
            companyLogo: '/alfa.svg',
            jobTitle: 'DevOps Engineer',
            company: 'Cloud Solutions',
            date: '2024-12-01',
            status: 'Rejected',
        },
    ];

    return (
        <div className="bg-white p-6 rounded-2XL shadow-md">
            <h2 className="text-lg font-semibold mb-4">Recent Application</h2>
            <div className="space-y-4">
                {applications.map((app, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Image
                                src={app.companyLogo}
                                alt={`${app.company} logo`}
                                width={50}
                                height={50}
                                className=" mr-4"
                            />
                            <div>
                                <h3 className="font-semibold">{app.jobTitle}</h3>
                                <p className="text-gray-500">{app.company}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500">{app.date}</p>
                            <p
                                className={`font-semibold ${app.status === 'Applied'
                                        ? 'text-blue-500'
                                        : app.status === 'Interviewing'
                                            ? 'text-yellow-500'
                                            : app.status === 'Accepted'
                                                ? 'text-green-500'
                                                : 'text-red-500'
                                    }`}
                            >
                                {app.status}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentApplication;
