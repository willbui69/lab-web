export default function PeoplePage() {
    const members = [
        { name: "Dr. Nha Nguyen", role: "Group Leader", img: "/nha.jpg" },
        { name: "Alice", role: "Researcher", img: "/avatar.jpg" },
        { name: "Bob", role: "Researcher", img: "/avatar.jpg" },
        { name: "Charlie", role: "Researcher", img: "/avatar.jpg" }
    ];

    return (
        <div className=" text-white py-10 px-4">
            <h1 className="text-3xl font-bold text-center">Our People</h1>
            <p className="mt-2 text-center text-gray-300">
                Meet our talented researchers and faculty members.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-6 max-w-5xl mx-auto">
                {members.map((member, index) => (
                    <div key={index} className="text-center">
                        <img
                            src={member.img}
                            alt={member.name}
                            className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-gray-700 object-cover"
                        />
                        <h2 className="text-xl font-semibold">
                            {member.name}
                        </h2>
                        <p className="text-gray-400 italic">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
