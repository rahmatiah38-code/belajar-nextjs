const saya = {
    name: "Ita Rahmatiah Mustamin",
    role: "Peserta Bootcam",
    favoriteTech : [
        "Tailwind CSS",
        "React",
        "Phyton"
    ]
}
    
;
export async function GET() {
    return Response.json(saya);
    
}