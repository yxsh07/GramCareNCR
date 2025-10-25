// This utility simulates a database by saving data to localStorage.
// The data can be exported to CSV files via an explicit function call.

// Utility to save an entry to localStorage
const saveToLocalStorage = (key: string, entry: object, recordType: string) => {
    try {
        const existingDataRaw = localStorage.getItem(key);
        const existingData = existingDataRaw ? JSON.parse(existingDataRaw) : [];
        existingData.push(entry);
        localStorage.setItem(key, JSON.stringify(existingData));
        // Add a console log for demonstration purposes
        console.log(`Record saved for [${recordType}]:`, entry);
    } catch (error) {
        console.error("Failed to save to localStorage", error);
        alert("There was an error saving your data. Please ensure your browser allows site data storage.");
    }
};

// Utility to download content as a CSV file
const downloadCSV = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

// --- Medicine Order ---
interface MedicineOrder {
    name: string;
    address: string;
    contact: string;
    quantity: number;
    medicineName: string;
}

export const saveMedicineOrder = (order: MedicineOrder) => {
    const orderWithTimestamp = { ...order, orderDate: new Date().toISOString() };
    saveToLocalStorage('medicineOrders', orderWithTimestamp, 'Medicine Order');
};

// --- Blood Checkup Appointment ---
interface BloodCheckupAppointment {
    name: string;
    contact: string;
    address: string;
    dateTime: string;
    notes?: string;
}

export const saveBloodCheckupAppointment = (appointment: BloodCheckupAppointment) => {
    const appointmentWithTimestamp = { ...appointment, submissionDate: new Date().toISOString() };
    saveToLocalStorage('bloodCheckups', appointmentWithTimestamp, 'Blood Checkup');
};

// --- Doctor's Appointment ---
interface DoctorsAppointment {
    name: string;
    address: string;
    issue: string;
}

export const saveDoctorsAppointment = (appointment: DoctorsAppointment) => {
    const appointmentWithTimestamp = { ...appointment, submissionDate: new Date().toISOString() };
    saveToLocalStorage('doctorsAppointments', appointmentWithTimestamp, "Doctor's Appointment");
};

// --- Contact Message ---
interface ContactMessage {
    name: string;
    contactInfo: string;
    message: string;
}

export const saveContactMessage = (message: ContactMessage) => {
    const messageWithTimestamp = { ...message, submissionDate: new Date().toISOString() };
    saveToLocalStorage('contactMessages', messageWithTimestamp, 'Contact Message');
};


// --- Data Export Functionality ---

const convertToCSV = (data: any[], columns: { key: string, label: string }[]): string => {
    const headerRow = columns.map(c => c.label).join(',');
    const rows = data.map(item => {
        return columns.map(col => {
            const value = item[col.key] || '';
            // Enclose in quotes and escape existing quotes
            return `"${String(value).replace(/"/g, '""')}"`;
        }).join(',');
    });
    return [headerRow, ...rows].join('\n');
};

const exportDataFromLocalStorage = (key: string, filename: string, columns: { key: string, label: string }[]) => {
    try {
        const dataRaw = localStorage.getItem(key);
        if (!dataRaw) return false;
        
        const data = JSON.parse(dataRaw);
        if (!Array.isArray(data) || data.length === 0) return false;
        
        const csvContent = convertToCSV(data, columns);
        downloadCSV(csvContent, filename);
        return true;
    } catch (error) {
        console.error(`Failed to export data for ${key}`, error);
        return false;
    }
}

export const exportAllData = () => {
    let exportedCount = 0;

    if (exportDataFromLocalStorage(
        'medicineOrders', 
        'medicine_orders_database.csv',
        [
            { key: 'name', label: 'Full Name' },
            { key: 'address', label: 'Delivery Address' },
            { key: 'contact', label: 'Contact Number' },
            { key: 'medicineName', label: 'Medicine Name' },
            { key: 'quantity', label: 'Quantity' },
            { key: 'orderDate', label: 'Order Date' }
        ]
    )) exportedCount++;

    if (exportDataFromLocalStorage(
        'bloodCheckups',
        'blood_checkups_database.csv',
        [
            { key: 'name', label: 'Full Name' },
            { key: 'contact', label: 'Contact Number' },
            { key: 'address', label: 'Address' },
            { key: 'dateTime', label: 'Preferred Date & Time' },
            { key: 'notes', label: 'Notes' },
            { key: 'submissionDate', label: 'Submission Date' }
        ]
    )) exportedCount++;
    
    if (exportDataFromLocalStorage(
        'doctorsAppointments',
        'doctors_appointments_database.csv',
        [
            { key: 'name', label: 'Full Name' },
            { key: 'address', label: 'Address' },
            { key: 'issue', label: 'Health Issue' },
            { key: 'submissionDate', label: 'Submission Date' }
        ]
    )) exportedCount++;

    if (exportDataFromLocalStorage(
        'contactMessages',
        'contact_messages_database.csv',
        [
            { key: 'name', label: 'Name' },
            { key: 'contactInfo', label: 'Contact Info' },
            { key: 'message', label: 'Message' },
            { key: 'submissionDate', label: 'Submission Date' }
        ]
    )) exportedCount++;

    if (exportedCount === 0) {
        alert("No data has been recorded yet. Please submit some forms first.");
    }
};